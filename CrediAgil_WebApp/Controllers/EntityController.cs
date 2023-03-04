using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using UI.WEB.Models;
using Microsoft.AspNetCore.Http;
using System.IO;
using OfficeOpenXml;
using System.Drawing;
using ClosedXML.Excel;
using UI.WEB.Models.POCO;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using UI.WEB.Data;
using UI.WEB.Util;
using DataCredit;
using static DataCredit.clsCaltecServiceSoapClient;
using UI.WEB.Components;
using Microsoft.EntityFrameworkCore;
using System.Net;
using Microsoft.AspNetCore.Mvc.Rendering;
using static UI.WEB.ModelsOwn.ConsultModel;
using UI.WEB.ModelsOwn;

namespace UI.WEB.Controllers
{
    public class EntityController : Controller
    {
        UI_Context _context;
        IConfiguration  _configuration;

        public EntityController(UI_Context context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }


        [HttpPost]
        public async Task<IActionResult> DatosProducto([FromBody] string code)
        {
            Productos producto = await _context.Productos.Where(p => p.Id.ToString() == code).FirstOrDefaultAsync();

            return producto is null ? Json(false) : Json(producto);
        }
    }
}
