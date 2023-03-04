using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using CrediAgil_WebApp.Data;
using DocumentFormat.OpenXml.Spreadsheet;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using UI.WEB.Constantes;
using UI.WEB.Data;
using UI.WEB.Models;
using UI.WEB.ModelsOwn;

namespace UI.WEB.Areas.Identity.Pages.Account.Manage
{
    public partial class IndexModel : PageModel
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UI_Context _context;

        public IndexModel(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager, UI_Context _context)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            this._context = _context;
        }

        [Display(Name = "Nombre de Usuario")]
        public string Username { get; set; }

        [TempData]
        public string StatusMessage { get; set; }


        [BindProperty]
        public InputModel Input { get; set; }


        public List<SelectListItem> States { get; private set; }
        public List<SelectListItem> Sucursales { get; private set; }
        public List<SelectListItem> Cargos { get; private set; }

        public class InputModel
        {
            [Required]
            [DataType(DataType.Text)]
            [MaxLength(50)]
            [Display(Name = "Nombres")]
            public string FirstName { get; set; }

            [DataType(DataType.Text)]
            [MaxLength(50)]
            [Display(Name = "Apellidos")]
            public string LastName { get; set; }

            [Required]
            [Display(Name = "Estado")]
            public Guid State { get; set; }

            [Required]
            [Display(Name = "Sucursal")]
            public Guid Sucursal { get; set; }


            [Phone]
            [Display(Name = "Telefono")]
            public string PhoneNumber { get; set; }

            [Phone]
            [Display(Name = "Telefono Alternativo")]
            public string PhoneNumberAlt { get; set; }

            [Display(Name = "Cargo")]
            public Guid Cargo { get; set; }

            [EmailAddress]
            [Display(Name = "Correo")]
            public string Email { get; set; }
        }

        private async Task LoadAsync(ApplicationUser user)
        {
            Username = await _userManager.GetUserNameAsync(user);

            Input = new InputModel
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                PhoneNumber = user.PhoneNumber,
                PhoneNumberAlt = user.PhoneNumberAlt,
                Sucursal = user.Sucursal,
                State = user.State,
                Cargo = user.Cargo,
                Email = user.Email,
            };

            Sucursales = _context.Sucursal.Select(s => new SelectListItem(s.Description, s.Id.ToString(), s.Id == user.Sucursal)).ToList();
            States = _context.UserState.Select(s => new SelectListItem(s.Descripcion, s.Id.ToString(), s.Id == user.State)).ToList();
            Cargos = _context.Cargo.Select(s => new SelectListItem(s.Description, s.Id.ToString(), s.Id == user.Cargo)).ToList();
            Cargos.Insert(0, new SelectListItem("Ninguno", Guid.Empty.ToString()));
        }

        public async Task<IActionResult> OnGetAsync(Guid? userId)
        {
            return await new AccountManageModel().OnGetMethodSetUserData(this, _userManager, userId, async (user) =>
            {
                await LoadAsync(user);
            });
        }

        public async Task<IActionResult> OnPostAsync(Guid? userId)
        {
            if (userId != null && !User.IsInRole(RolesDefinition.Administrator))
                return Unauthorized();

            ApplicationUser user = await new AccountManageModel().GetQueryUser(this, _userManager, userId);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            user.FirstName = Input.FirstName;
            user.LastName = Input.LastName;
            user.PhoneNumber = Input.PhoneNumber;
            user.PhoneNumberAlt = Input.PhoneNumberAlt;
            user.Sucursal = Input.Sucursal;
            user.State = Input.State;
            user.Cargo = Input.Cargo;
            user.Email = Input.Email;

            var result = await _userManager.UpdateAsync(user);
            if (!result.Succeeded)
            {
                StatusMessage = "Error inesperado al actualizar los datos.";
                return RedirectToPage();
            }

            await _signInManager.RefreshSignInAsync(await _userManager.GetUserAsync(User));
            StatusMessage = "Información actualizada correctamente.";
            return RedirectToPage();
        }
    }
}
