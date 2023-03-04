using DataCredit;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using System.Threading.Tasks;
using UI.WEB.Components;
using UI.WEB.Models.POCO;
using UI.WEB.Models;
using UI.WEB.Util;
using static DataCredit.clsCaltecServiceSoapClient;
using Microsoft.EntityFrameworkCore;
using System;
using DocumentFormat.OpenXml.Office2010.Excel;
using System.Linq.Dynamic.Core;
using Microsoft.AspNetCore.Identity;
using UI.WEB.Data;
using Microsoft.AspNetCore.Http;

namespace UI.WEB.ModelsOwn
{
    public class ConsultModel
    {
        internal class ConsultResult
        {
            public bool Success { get; set; }
            public int Code { get; set; }
            public string Message { get; set; }
            public ConsultItemResult Item { get; set; } = null;
        }

        internal class ConsultItemResult
        {
            public string Identification { get; set; }
            public string Name { get; set; }
            public bool DecisionScore { get; set; }
            public bool PolicyLimits { get; set; }
            public bool CreditsQuota { get; set; }
            public bool CreditDecision { get; set; }
        }

        internal static async Task<ConsultResult> MakeConsult(UI_Context _context, CredencialesCdr cdr, string cedula)
        {
            string identificationNumber = cedula.Trim();

            //Consumir el servicio WEB de DataCredit
            GlobalUtil util = new GlobalUtil();
            clsCaltecServiceSoapClient soapClient = new clsCaltecServiceSoapClient(EndpointConfiguration.clsCaltecServiceSoap);
            var response = await soapClient.GetXmlAsync(cdr.UserDc, cdr.PassDc, "C", identificationNumber);

            DataCreditModel dcModel = util.DeserializeXML<DataCreditModel>(response.Body.GetXmlResult);

            if (dcModel == null)
                return new ConsultResult()
                {
                    Success = false,
                    Code = 205,
                    Message = "El servicio WEB no devolvio ningun dato",
                    Item = new ConsultItemResult()
                    {
                        Identification = cedula
                    }
                };
            else if (dcModel.ErrorHandling.Id == 3)
                return new ConsultResult()
                {
                    Success = false,
                    Code = 404, //206
                    Message = "LA CEDULA NO EXISTE EN LA BASE DE DATOS",
                    Item = new ConsultItemResult()
                    {
                        Identification = cedula
                    }
                };
            else if (dcModel.Individuo == null)
                return new ConsultResult()
                {
                    Success = false,
                    Code = 207,
                    Message = "No hay informacion para la persona",
                    Item = new ConsultItemResult()
                    {
                        Identification = cedula
                    }
                };

            CreditComponent cmp = new CreditComponent();
            object[] paramId = new object[]
            {
                    new SqlParameter("@Id", identificationNumber)
            };

            /***********Insertar la informacion del cliente***********/
            Cliente cliente = cmp.LoadClientInfo(dcModel, identificationNumber);
            List<CreditosCliente> creditos = cmp.LoadCreditoInfo(dcModel, identificationNumber);

            await _context.GetProcedures().TrasladarClienteAsync(identificationNumber);
            await _context.Cliente.AddAsync(cliente);
            await _context.CreditosCliente.AddRangeAsync(creditos);
            await _context.SaveChangesAsync();

            /***********Insertar la foto del cliente***********/
            int rowAffectedFoto = await _context.Database
                .ExecuteSqlRawAsync($"delete from Consulta.FotoCliente where CodigoIdentificacion = @Id;", paramId);
            await _context.FotoCliente.AddAsync(new FotoCliente()
            {
                CodigoIdentificacion = identificationNumber,
                Foto = dcModel.Foto,
                FechaCreacion = DateTime.Now,
                FechaModificacion = DateTime.Now
            });
            await _context.SaveChangesAsync();

            //Calculando scores.
            await _context.GetProcedures().CalcularScoresAsync(cliente.Identificacion);

            return new ConsultResult()
            {
                Success = true
            };
        }
    }
}
