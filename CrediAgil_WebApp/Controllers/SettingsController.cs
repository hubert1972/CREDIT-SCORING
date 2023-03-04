using IdentityModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UI.WEB.Constantes;
using UI.WEB.Data;
using UI.WEB.Models;

namespace UI.WEB.Controllers
{
    [Authorize(Roles = RolesDefinition.Administrator)]
    public class SettingsController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        UI_Context _context;
        IConfiguration _configuration;

        public SettingsController(UI_Context context, IHttpContextAccessor accessor, IConfiguration configuration, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _configuration = configuration;
            _userManager = userManager;
        }

        [HttpGet]
        public ActionResult General()
        {
            var parametros = _context.ParametrosV.FirstOrDefault();

            return View(parametros);
        }

        [HttpPost]
        public ActionResult General(float tipocambio, float imaereciente, float imaeprom12)
        {
            try
            {
                object[] paramId = new object[]
                {
                    new SqlParameter("@TC", SqlDbType.Decimal){Value= tipocambio},
                    new SqlParameter("@IR", SqlDbType.Decimal){Value= imaereciente},
                    new SqlParameter("@I12", SqlDbType.Decimal) { Value = imaeprom12 }
                };

                _context.Database.BeginTransaction();
                _context.Database.ExecuteSqlRaw("UPDATE Consulta.Parametros SET TipoCambio=@TC, IMAEReciente=@IR, IMAEProm12=@I12", paramId);
                _context.Database.CommitTransaction();

                return Json(new { Success = true });
            }
            catch (Exception ex)
            {
                return Json(new { Success = false, Message = ex.Message });
            }
        }

        [HttpPost]
        public async Task<IActionResult> ResetPassword(string email)
        {
            try
            {
                var user = await _userManager.FindByEmailAsync(email);

                if (user == null)
                    return Json(new { Success = false, Message = "El usuario para el correo enviado no existe. Revise el campo CORREO!" });

                string newPass = this.GenerateRandomPassword(null);
                var code = await _userManager.GeneratePasswordResetTokenAsync(user);
                var result = await _userManager.ResetPasswordAsync(user, code, newPass);

                if(result.Succeeded)
                    return Json(new { Success = true, Message = "OK", NewPass = newPass });

                //Fail
                return Json(new { Success = false, Message = "Fallo el reset de la clave" });
            }
            catch (Exception ex)
            {
                return Json(new { Success = false, Message = ex.Message });
            }
        }

        public string GenerateRandomPassword(PasswordOptions opts = null)
        {
            if (opts == null) opts = new PasswordOptions()
            {
                RequiredLength = 8,
                RequiredUniqueChars = 4,
                RequireDigit = true,
                RequireLowercase = true,
                RequireNonAlphanumeric = true,
                RequireUppercase = true
            };

            string[] randomChars = new[] {
                "ABCDEFGHJKLMNOPQRSTUVWXYZ",    // uppercase 
                "abcdefghijkmnopqrstuvwxyz",    // lowercase
                "0123456789",                   // digits
                "!@$?_-"                        // non-alphanumeric
            };
            CryptoRandom rand = new CryptoRandom();
            List<char> chars = new List<char>();

            if (opts.RequireUppercase)
                chars.Insert(rand.Next(0, chars.Count),
                    randomChars[0][rand.Next(0, randomChars[0].Length)]);

            if (opts.RequireLowercase)
                chars.Insert(rand.Next(0, chars.Count),
                    randomChars[1][rand.Next(0, randomChars[1].Length)]);

            if (opts.RequireDigit)
                chars.Insert(rand.Next(0, chars.Count),
                    randomChars[2][rand.Next(0, randomChars[2].Length)]);

            if (opts.RequireNonAlphanumeric)
                chars.Insert(rand.Next(0, chars.Count),
                    randomChars[3][rand.Next(0, randomChars[3].Length)]);

            for (int i = chars.Count; i < opts.RequiredLength
                || chars.Distinct().Count() < opts.RequiredUniqueChars; i++)
            {
                string rcs = randomChars[rand.Next(0, randomChars.Length)];
                chars.Insert(rand.Next(0, chars.Count),
                    rcs[rand.Next(0, rcs.Length)]);
            }

            return new string(chars.ToArray());
        }
    }
}
