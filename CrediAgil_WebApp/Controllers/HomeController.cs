using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using DataCredit;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using UI.WEB.Constantes;
using UI.WEB.Models.POCO;
using UI.WEB.Util;
using static DataCredit.clsCaltecServiceSoapClient;

namespace CrediAgil_WebApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public ActionResult Index()
        {
            if (!User.IsInRole(RolesDefinition.Administrator) && !User.IsInRole(RolesDefinition.Gerente) && !User.IsInRole(RolesDefinition.Consult))
                return RedirectToAction("History", "Consult");
            else
                return RedirectToAction("Individual", "Consult");
        }
    }
}
