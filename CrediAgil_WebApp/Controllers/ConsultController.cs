using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OfficeOpenXml;
using System.Data;
using UI.WEB.ModelsOwn;
using Microsoft.Extensions.Configuration;
using UI.WEB.Models;
using System;
using static UI.WEB.ModelsOwn.ConsultModel;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System.Web;
using EPPlus.Core.Extensions;
using System.IO.Packaging;
using System.IO;
using OfficeOpenXml.Table;
using Microsoft.AspNetCore.Authorization;
using UI.WEB.Constantes;
using Microsoft.AspNetCore.Identity;
using UI.WEB.Data;

namespace UI.WEB.Controllers
{
    [Authorize(Roles = RolesDefinition.All)]
    public class ConsultController : Controller
    {
        UI_Context _context;
        UserManager<ApplicationUser> _userManager;
        IConfiguration _configuration;

        public ConsultController(UI_Context context, UserManager<ApplicationUser> userManager, IHttpContextAccessor accessor, IConfiguration configuration)
        {
            _context = context;
            _userManager = userManager;
            _configuration = configuration;
        }

        [Authorize(Roles = RolesDefinition.Administrator + "," + RolesDefinition.Gerente + "," + RolesDefinition.Consult)]
        public IActionResult Individual()
        {

            return View();
        }


        [Authorize(Roles = RolesDefinition.Administrator + "," + RolesDefinition.Gerente + "," + RolesDefinition.Consult)]
        public IActionResult Massive()
        {

            return View();
        }

        [Authorize(Roles = RolesDefinition.Administrator + "," + RolesDefinition.Gerente + "," + RolesDefinition.Consult)]
        public async Task<ActionResult> ConsultarCliente(string identificationNumber)
        {
            try
            {
                var user = await _userManager.GetUserAsync(User);
                CredencialesCdr cdr = _context.CredencialesCdr.FirstOrDefault(c => c.UserId == user.Id);
                if (cdr is null)
                {
                    return Json(new
                    {
                        Success = false,
                        Code = 403,
                        Message = "No tiene asignada ninguna credencial de consulta.",
                        Item = new ConsultItemResult()
                        {
                            Identification = identificationNumber
                        }
                    });
                }

                ConsultResult result = await MakeConsult(_context, cdr, identificationNumber);

                if (!result.Success)
                {
                    Response.StatusCode = result.Code;

                    return Json(new
                    {
                        result.Success,
                        result.Message,
                    });
                }
                else
                {
                    return Json(new
                    {
                        Success = true,
                        Message = "Datos generados correctamente!"
                    });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500);
            }
        }

        [HttpPost]
        [Authorize(Roles = RolesDefinition.Administrator + "," + RolesDefinition.Gerente + "," + RolesDefinition.Consult)]
        public async Task<IActionResult> UploadMasiveIds(IFormFile file)
        {
            //Verificando si tiene usuario de central de riesgo.
            var user = await _userManager.GetUserAsync(User);
            CredencialesCdr cdr = _context.CredencialesCdr.FirstOrDefault(c => c.UserId == user.Id);
            if (cdr is null)
            {
                return Forbid();
            }

            List<string> ids = new List<string>();

            using (var package = new ExcelPackage())
            {
                //Abriendo excel.
                package.Load(file.OpenReadStream());

                //Obteniendo hoja.
                using var worksheet = package.Workbook.Worksheets[0];

                //Obteniendo filas.
                for (int rowNum = 2; rowNum <= worksheet.Dimension.End.Row; rowNum++)
                {
                    //Agregando cedulas a la lista.
                    string row_text = worksheet.Cells[rowNum, 1].Text.Trim();
                    if (!string.IsNullOrEmpty(row_text))
                        ids.Add(row_text);
                }

            }

            List<ConsultModel.ConsultResult> result = new List<ConsultModel.ConsultResult>();

            //Realizando consultas.
            foreach (string id in ids)
            {
                try
                {
                    var temp_result = await ConsultModel.MakeConsult(_context, cdr, id);
                    result.Add(new ConsultModel.ConsultResult()
                    {
                        Success = temp_result.Success,
                        Item = _context.Cliente.Where(c => c.Identificacion == id).Select(c => new ConsultModel.ConsultItemResult()
                        {
                            Identification = id,
                            Name = c.Nombres + c.Apellidos,
                            DecisionScore = c.FlagDecisionScore,
                            PolicyLimits = c.FlagLimitesPolitica,
                            CreditsQuota = c.FlagCupoCreditos,
                            CreditDecision = c.FlagDecisionScore && c.FlagLimitesPolitica && c.FlagCupoCreditos
                        }).FirstOrDefault()
                    });
                }
                catch (Exception ex)
                {
                    result.Add(new ConsultModel.ConsultResult()
                    {
                        Success = false,
                        Message = ex.Message,
                        Code = 500,
                        Item = new ConsultModel.ConsultItemResult()
                        {
                            Identification = id
                        }
                    });
                }
            }

            //Si todas las consultas terminaron en error...
            if (result.All(x => !x.Success))
                Response.StatusCode = 500;

            return Json(result);
        }


        public IActionResult History(uint start = 0, DateTime sdate = default, DateTime edate = default, string search = null)
        {
            int quote = 20;
            if (start != 0 && (start % quote) != 0)
                return StatusCode(403);

            if (sdate == default && edate == default)
            {
                var table = _context.ClientesV;
                if (table.Count() != 0)
                {
                    sdate = table.Min(c => c.FechaCreacion).Date;
                    edate = table.Max(c => c.FechaCreacion).Date;
                }
                else
                    sdate = edate = DateTime.Now.Date;
            }
            else if (sdate == default || edate == default)
                return StatusCode(403);

            //Filtrando.
            var query = GetHistoryQuery(sdate, edate, search);


            //Consulta.
            ClientesV[] history = query.OrderByDescending(c => c.FechaCreacion).Skip((int)start).Take(quote).ToArray();

            ViewBag.Start = start;
            ViewBag.Quote = quote;
            ViewBag.Total = query.Count();

            ViewBag.Search = HttpUtility.HtmlEncode(search);
            ViewBag.StartDate = sdate.ToString("yyyy/MM/dd");
            ViewBag.EndDate = edate.ToString("yyyy/MM/dd");
            ViewBag.Query = $"sdate={ViewBag.StartDate}&edate={ViewBag.EndDate}" + (search != null ? $"&search={HttpUtility.HtmlEncode(search)}" : "");

            return View(history);
        }

        public FileResult HistoryToExcel(DateTime sdate, DateTime edate, string search)
        {
            var data = GetHistoryQuery(sdate, edate, search).Select(c => new
            {
                c.FechaCreacion,
                c.Identificacion,
                Nombre = c.Nombres + c.Apellidos,
                Score = c.ScoreGanador,
                DecisionScore = c.FlagDecisionScore ? "Pre-Aprobado" : "Denegado",
                LimitesPoliticaInterna = c.FlagLimitesPolitica ? "Cumplidos" : "No cumplidos",
                CupoCredito = c.FlagCupoCreditos ? "Disponible" : "Exceso de creditos",
                DecisionCrediticia = c.FlagDecisionScore && c.FlagLimitesPolitica && c.FlagCupoCreditos
            }).ToArray();
            using ExcelPackage package = new ExcelPackage();
            ExcelWorksheet ws = package.Workbook.Worksheets.Add("Historico");
            ws.Cells["A1"].LoadFromCollection(data, true, TableStyles.Light20);
            ws.Column(1).Style.Numberformat.Format = "dd/mm/yyyy";

            for (int i = 1; i <= 8; i++)
                ws.Column(i).AutoFit();

            return File(new MemoryStream(package.GetAsByteArray()), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", $"Historico {search} {sdate.ToString("dd/MM/yyyy")} - {edate.ToString("dd/MM/yyyy")}.xlsx");
        }

        private IQueryable<ClientesV> GetHistoryQuery(DateTime sdate, DateTime edate, string search)
        {
            IQueryable<ClientesV> query = _context.ClientesV.Where(c => c.FechaCreacion.Date >= sdate && c.FechaCreacion.Date <= edate);
            if (!string.IsNullOrEmpty(search))
                query = query.Where(c => c.Identificacion.Contains(search) || (c.Nombres + c.Apellidos).ToLower().Contains(search.ToLower()));

            return query;
        }

        /// <summary>
        /// Consulta la informacion de un cliente en la central de riesgo
        /// </summary>
        /// <param name="identificationNumber">Numero de cedula del cliente</param>
        /// <returns></returns>
        public async Task<IActionResult> PerfilCliente(string id)
        {
            Cliente model = await _context.Cliente.Where(c => c.Identificacion == id).FirstOrDefaultAsync();
            List<CreditosCliente> credits = _context.CreditosCliente.Where(c => c.CodigoIdentificacion == id).ToList();
            List<DecisionCrediticia> decision = _context.DecisionCrediticia.ToList();
            string foto = await _context.FotoCliente.Where(c => c.CodigoIdentificacion == id).Select(f => f.Foto).FirstOrDefaultAsync();
            List<SelectListItem> productos = _context.Productos.Select(p => new SelectListItem { Value = p.Id.ToString(), Text = p.Producto }).ToList();
            productos.Insert(0, new SelectListItem { Value = "", Text = "--- Selecciona un producto ---" });

            ViewBag.Credits = credits;
            ViewBag.DecisionCrediticia = decision;
            ViewBag.Foto = foto;
            ViewBag.Productos = productos;

            return View(model);
        }

        public async Task<IActionResult> PerfilClienteHistorico(string id, long mark)
        {
            var dateHistory = new DateTime(mark);
            Cliente1 model = await _context.Cliente1.Where(c => c.Identificacion == id && c.FechaTrasladoHistorico == dateHistory).FirstOrDefaultAsync();
            List<CreditosCliente> credits = _context.CreditosCliente1.Where(c => c.CodigoIdentificacion == id && c.FechaTrasladoHistorico == dateHistory)
                .Select(c => CopyObjectProperties(new CreditosCliente(), c)).ToList();

            List<DecisionCrediticia> decision = _context.DecisionCrediticia.ToList();
            string foto = await _context.FotoCliente.Where(c => c.CodigoIdentificacion == id).Select(f => f.Foto).FirstOrDefaultAsync();
            List<SelectListItem> productos = _context.Productos.Select(p => new SelectListItem { Value = p.Id.ToString(), Text = p.Producto }).ToList();
            productos.Insert(0, new SelectListItem { Value = "", Text = "--- Selecciona un producto ---" });

            ViewBag.Credits = credits;
            ViewBag.DecisionCrediticia = decision;
            ViewBag.Foto = foto;
            ViewBag.Productos = productos;

            return View("PerfilCliente", model);
        }

        private static T CopyObjectProperties<T>(T target, object source)
        {
            if (target != null && source != null)
            {
                Type sourceType = source.GetType();
                Type targetType = target.GetType();

                var sourceProperties = sourceType.GetProperties();
                foreach (var sProp in sourceProperties)
                {
                    var tProp = targetType.GetProperty(sProp.Name);
                    if (tProp != null)
                    {
                        if (sProp.CanRead && tProp.CanWrite)
                        {
                            var sPropValue = sProp.GetValue(source, null);
                            tProp.SetValue(target, sPropValue, null);
                        }
                    }
                }
            }

            return target;
        }
    }
}
