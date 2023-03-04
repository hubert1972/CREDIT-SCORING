using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using DocumentFormat.OpenXml.Spreadsheet;
using DocumentFormat.OpenXml.Wordprocessing;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Logging;
using UI.WEB.Constantes;
using UI.WEB.Data;
using UI.WEB.Models;

namespace UI.WEB.Areas.Identity.Pages.Account
{
    [Authorize(Roles = RolesDefinition.Administrator)]
    public class RegisterModel : PageModel
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ILogger<RegisterModel> _logger;
        private readonly IEmailSender _emailSender;
        private readonly UI_Context _context;

        public RegisterModel(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            UI_Context _context,
            ILogger<RegisterModel> logger)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
            this._context = _context;
        }

        [BindProperty]
        public InputModel Input { get; set; }

        public string ReturnUrl { get; set; }

        public List<SelectListItem> Sucursales { get; private set; }
        public List<SelectListItem> Cargos { get; private set; }

        public class InputModel
        {
            [Required(ErrorMessage = "El nombre de usuario es requerido y debe ser un correo valido")]
            [Display(Name = "Nombre de Usuario")]
            public string UserName { get; set;}

            [Required(ErrorMessage = "Los nombres son requeridos")]
            [Display(Name = "Nombres")]
            [StringLength(50)]
            public string FirstName { get; set; }

            [Required(ErrorMessage = "Los apellidos son requeridos")]
            [Display(Name = "Apellidos")]
            [StringLength(50)]
            public string LastName { get; set; }

            [Required(ErrorMessage = "La sucursal es requerida")]
            [Display(Name = "Sucursal")]
            public Guid Sucursal { get; set; }

            [Display(Name = "Cargo")]
            public Guid Cargo { get; set; }

            [Required(ErrorMessage = "La clave es requerida")]
            [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
            [DataType(System.ComponentModel.DataAnnotations.DataType.Password)]
            [Display(Name = "Password")]
            public string Password { get; set; }

            [DataType(System.ComponentModel.DataAnnotations.DataType.Password)]
            [Display(Name = "Confirm password")]
            [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
            public string ConfirmPassword { get; set; }
        }

        public async Task<IActionResult> OnGetAsync(string returnUrl = null)
        {
            Sucursales = _context.Sucursal.Select(s => new SelectListItem(s.Description, s.Id.ToString())).ToList();
            Cargos = _context.Cargo.Select(s => new SelectListItem(s.Description, s.Id.ToString())).ToList();
            //Cargos.Insert(0, new SelectListItem("Ninguno", Guid.Empty.ToString()));

            ReturnUrl = returnUrl;

            return Page();
        }

        public async Task<IActionResult> OnPostAsync(string returnUrl = null)
        {
            returnUrl ??= Url.Content("~/");
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser {
                    UserName = Input.UserName,
                    FirstName= Input.FirstName,
                    LastName= Input.LastName,
                    State = Guid.Parse(ApplicationUser.STATE_ACTIVE),
                    Sucursal = Input.Sucursal,
                    Cargo= Input.Cargo,
                    Email = Input.UserName
                };
                var result = await _userManager.CreateAsync(user, Input.Password);

                if (result.Succeeded)
                {
                    _logger.LogInformation("User created a new account with password.");

                    var callbackUrl = Url.Page(
                        "/Account/ConfirmEmail",
                        pageHandler: null,
                        values: new { area = "Identity", userId = user.Id, code = 0, returnUrl = returnUrl },
                        protocol: Request.Scheme);

                    //await _signInManager.SignInAsync(user, isPersistent: false);
                    return LocalRedirect(returnUrl);
                }
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(string.Empty, error.Description);
                }
            }

            // If we got this far, something failed, redisplay form
            return Page();
        }
    }
}
