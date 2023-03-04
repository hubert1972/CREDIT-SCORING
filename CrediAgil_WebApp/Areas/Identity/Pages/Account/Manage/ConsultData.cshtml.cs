using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using CrediAgil_WebApp.Data;
using DocumentFormat.OpenXml.Spreadsheet;
using Microsoft.AspNetCore.Authorization;
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
    [Authorize(Roles = RolesDefinition.Administrator)]
    public partial class ConsultDataModel : PageModel
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UI_Context _context;

        public ConsultDataModel(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager, UI_Context _context)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            this._context = _context;
        }


        [TempData]
        public string StatusMessage { get; set; }


        [BindProperty]
        public InputModel Input { get; set; }

        public class InputModel
        {
            [Required]
            [DataType(DataType.Text)]
            [MaxLength(50)]
            [Display(Name = "Nombre de usuario")]
            public string UserDC { get; set; }

           
            [Required(ErrorMessage = "La {0} es requerida")]
            [DataType(DataType.Text)]
            [MaxLength(50)]
            [Display(Name = "Clave")]
            public string PassWordDC { get; set; }
        }

        private async Task LoadAsync(ApplicationUser user)
        {
            CredencialesCdr cdr = _context.CredencialesCdr.FirstOrDefault(c => c.UserId == user.Id);

            Input = new InputModel
            {
                UserDC = cdr?.UserDc ?? "",
                PassWordDC = cdr?.PassDc ?? ""
            };
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

            CredencialesCdr cdr = _context.CredencialesCdr.FirstOrDefault(c => c.UserId == user.Id);

            if (cdr is null)
            {
                _context.CredencialesCdr.Add(new CredencialesCdr()
                {
                    UserId = user.Id,
                    UserDc = Input.UserDC,
                    PassDc = Input.PassWordDC
                });
            }
            else
            {
                cdr.UserDc = Input.UserDC;
                cdr.PassDc= Input.PassWordDC;
                _context.CredencialesCdr.Update(cdr);
            }
            await _context.SaveChangesAsync();

            await _signInManager.RefreshSignInAsync(await _userManager.GetUserAsync(User));
            StatusMessage = "Información actualizada correctamente.";
            return RedirectToPage();
        }
    }
}
