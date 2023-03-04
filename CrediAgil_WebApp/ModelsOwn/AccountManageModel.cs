using DocumentFormat.OpenXml.ExtendedProperties;
using DocumentFormat.OpenXml.Spreadsheet;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using UI.WEB.Constantes;
using UI.WEB.Data;

namespace UI.WEB.ModelsOwn
{
    public class AccountManageModel
    {
        public async Task<IActionResult> OnGetMethodSetUserData(PageModel page, UserManager<ApplicationUser> _userManager, Guid? userId, Func<ApplicationUser, Task> onSuccess)
        {
            if (userId != null && !page.User.IsInRole(RolesDefinition.Administrator))
                return page.Forbid();

            ApplicationUser user = await new AccountManageModel().GetQueryUser(page, _userManager, userId);

            if (user is null)
                return page.NotFound();

            page.ViewData["CurrentUser"] = user;

            await onSuccess(user);

            return page.Page();
        }

        public async Task<ApplicationUser> GetQueryUser(PageModel page, UserManager<ApplicationUser> _userManager, Guid? userId)
        {
            if (userId != null)
                    return await _userManager.Users.FirstOrDefaultAsync(u => u.Id == userId);
            else
                return await _userManager.GetUserAsync(page.User);

        }
    }
}
