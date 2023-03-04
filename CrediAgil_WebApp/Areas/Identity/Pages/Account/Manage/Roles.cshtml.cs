using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using DocumentFormat.OpenXml.Spreadsheet;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using UI.WEB.Constantes;
using UI.WEB.Data;
using UI.WEB.ModelsOwn;

namespace UI.WEB.Areas.Identity.Pages.Account.Manage
{
    [Authorize(Roles = RolesDefinition.Administrator)]
    public class RolesModel : PageModel
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ILogger<ChangePasswordModel> _logger;

        public RolesModel(
            UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager,
            SignInManager<ApplicationUser> signInManager,
            ILogger<ChangePasswordModel> logger)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
            _logger = logger;
        }


        [TempData]
        public string StatusMessage { get; set; }

        public ApplicationUser QueryUser { get; private set; }
        public List<ApplicationRole> CurrentRoles { get; private set; }
        public List<ApplicationRole> AvailableRoles { get; private set; }

        public async Task<IActionResult> OnGetAsync(Guid? userId)
        {
            return await new AccountManageModel().OnGetMethodSetUserData(this, _userManager, userId, async (user) =>
            {
                var userRoles = await _userManager.GetRolesAsync(user);
                var currentRoles = _roleManager.Roles.Where(r => userRoles.Contains(r.Name));

                QueryUser = user;
                CurrentRoles = await currentRoles.ToListAsync();
                AvailableRoles = await _roleManager.Roles.Except(currentRoles).ToListAsync();
            });
        }

        public async Task<IActionResult> OnPostAsync(Guid userId, IList<Guid> sort)
        {
            // _userManager.Rol

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            ApplicationUser user = await new AccountManageModel().GetQueryUser(this, _userManager, userId);
            List<string> roles = await _roleManager.Roles.Where(r => sort.Contains(r.Id)).Select(r => r.Name).ToListAsync();

            var userRoles = await _userManager.GetRolesAsync(user);
            await _userManager.RemoveFromRolesAsync(user, userRoles);
            await _userManager.AddToRolesAsync(user, roles);

            if (userId == (await _userManager.GetUserAsync(User)).Id)
                _signInManager.SignOutAsync();

            return new JsonResult(new { Success = true });
        }
    }
}
