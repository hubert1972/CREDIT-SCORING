using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using System.Web;
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
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using UI.WEB.Constantes;
using UI.WEB.Data;
using UI.WEB.Models;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace UI.WEB.Areas.Identity.Pages.Account
{
    [Authorize(Roles = RolesDefinition.Administrator)]
    public class ListModel : PageModel
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ILogger<ListModel> _logger;
        private readonly IEmailSender _emailSender;
        private readonly UI_Context _context;

        public ListModel(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            UI_Context _context,
            ILogger<ListModel> logger)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
            this._context = _context;
        }

        public ApplicationUser CurrentUser { get; private set; }
        public List<UserViewModel> Users { get; private set; }

        public int PaginationStart { get; private set; }
        public int PaginationQuote { get; private set; }
        public int PaginationTotal { get; private set; }
        public string UrlParameterSearch { get; private set; }
        public string UrlQuery { get; private set; }

        public class UserViewModel
        {
            public Guid Id { get; set; }
            public string FullName { get; set; }
            public string Nickname { get; set; }
            public string Sucursal { get; set; }
            public string Cargo { get; set; }
            public bool IsActive { get; set; }
        }

        public async Task<IActionResult> OnGetAsync(uint start = 0, string search = null)
        {
            try
            {
                int quote = 10;
                //if (start != 0 && (start % quote) != 0)
                //    return StatusCode(403);

                var query = _userManager.Users;
                if (!string.IsNullOrEmpty(search))
                    query = query.Where(c => (c.FirstName + c.LastName).ToLower().Contains(search.ToLower()));

                PaginationStart = (int)start;
                PaginationQuote = quote;
                PaginationTotal = await query.CountAsync();
                UrlParameterSearch = HttpUtility.HtmlEncode(search);
                UrlQuery = (search != null ? $"search={HttpUtility.HtmlEncode(search)}" : string.Empty);

                Users = await query.Skip((int)start).Take(quote).Select(u => new UserViewModel()
                {
                    Id = u.Id,
                    Nickname = u.UserName,
                    FullName = u.FirstName + " " + u.LastName,
                    Sucursal = u.Sucursal.ToString(),
                    Cargo = u.Cargo.ToString(),
                    IsActive = u.State == Guid.Parse(ApplicationUser.STATE_ACTIVE)
                }).ToListAsync();

                var sucursales = _context.Sucursal.ToArray();
                var cargos = _context.Cargo.ToArray();
                Users.ForEach(u =>
                {
                    u.Sucursal = sucursales.FirstOrDefault(s => s.Id == Guid.Parse(u.Sucursal)).Description;
                    u.Cargo = cargos.FirstOrDefault(c => c.Id == Guid.Parse(u.Cargo)).Description;
                });

                CurrentUser = await _userManager.GetUserAsync(User);


                return Page();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "ERROR LIST");
                return StatusCode(403);
            }                        
        }
    }
}
