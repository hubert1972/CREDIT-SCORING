using UI.WEB.Models.POCO;
using UI.WEB.Models;
using System;
using System.Linq;
using System.Collections.Generic;

namespace UI.WEB.Components
{
    public class CreditComponent
    {
        public CreditComponent()
        {

        }

        public Cliente LoadClientInfo(DataCreditModel dcModel, string identificationNumber)
        {
            Cliente cliente = new Cliente();

            //Numero de creditos historicos
            int numCreditosHistoricos = 0;
            if (dcModel.DesgloseCreditos != null && dcModel.DesgloseCreditos.ProductoDesgloseCreditos != null)
            {
                foreach (var prod in dcModel.DesgloseCreditos.ProductoDesgloseCreditos)
                {
                    if (prod.CuentaProducto != null)
                        numCreditosHistoricos += prod.CuentaProducto.Count;
                }
            }

            cliente.Identificacion = identificationNumber;
            cliente.Nombres = dcModel.Individuo.Nombres;
            cliente.Apellidos = dcModel.Individuo.Apellidos;
            cliente.FechaCreacion = DateTime.Now;
            cliente.FechaNacimiento = dcModel.Individuo.FechaNacimiento;
            cliente.LugarNacimiento = dcModel.Individuo.LugarNacimiento;
            cliente.Edad = dcModel.Individuo.Edad;
            cliente.Nacionalidad = dcModel.Individuo.Nacionalidad;
            cliente.Sexo = dcModel.Individuo.Sexo;
            cliente.EstadoCivil = dcModel.Individuo.EstadoCivil;
            cliente.NumCreditosHistoricos = numCreditosHistoricos;
            cliente.Constante = Convert.ToDecimal(-2.8562778943);
            cliente.CoefNumCredActivos = Convert.ToDecimal(0.151760992610377);
            cliente.CoefTasaDefaultHist = Convert.ToDecimal(6.230800325159810);

            int cuentaCastigUlt24Mes = 0;
            int mas3Atra30DiasUltMeses = 0;
            int mas2Atrasos60Dias = 0;

            if (dcModel.AnalisisCrediticio != null)
            {
                foreach (var analisis in dcModel.AnalisisCrediticio.CantidadTotalCuentas.MonedaAnalisisCrediticio)
                {
                    if (!string.IsNullOrEmpty(analisis.Castigado))
                    {
                        cuentaCastigUlt24Mes += Convert.ToInt32(analisis.Castigado);
                    }
                }
            }
            

            if (dcModel.DesgloseCreditos != null && dcModel.DesgloseCreditos.ProductoDesgloseCreditos != null)
            {
                foreach (var desgloce in dcModel.DesgloseCreditos.ProductoDesgloseCreditos)
                {
                    foreach (var prod in desgloce.CuentaProducto)
                    {
                        if (!string.IsNullOrEmpty(prod.VecesAtraso30))
                        {
                            if (Convert.ToInt32(prod.VecesAtraso30) > 3)
                                mas3Atra30DiasUltMeses += Convert.ToInt32(prod.VecesAtraso30);
                        }

                        if (!string.IsNullOrEmpty(prod.VecesAtraso60))
                        {
                            if (Convert.ToInt32(prod.VecesAtraso60) > 2)
                                mas3Atra30DiasUltMeses += Convert.ToInt32(prod.VecesAtraso60);
                        }
                    }
                }
            }

            cliente.CuentaCastigUlt24Mes = cuentaCastigUlt24Mes;
            cliente.Mas3Atra30DiasUltMeses = mas3Atra30DiasUltMeses;
            cliente.Mas2Atrasos60Dias = mas2Atrasos60Dias;

            return cliente;
        }

        public List<CreditosCliente> LoadCreditoInfo(DataCreditModel dcModel, string identificationNumber)
        {
            List<CreditosCliente> creditos = new List<CreditosCliente>();

            try
            {
                if (dcModel.DesgloseCreditos != null && dcModel.DesgloseCreditos.ProductoDesgloseCreditos != null)
                {
                    foreach (var desgloce in dcModel.DesgloseCreditos.ProductoDesgloseCreditos)
                    {
                        foreach (var prod in desgloce.CuentaProducto)
                        {
                            CreditosCliente credito = new CreditosCliente
                            {
                                CodigoIdentificacion = identificationNumber,
                                TipoProducto = desgloce.Id,
                                GrupoProductos = desgloce.Cod,
                                Destino = desgloce.Cod,
                                Moneda = prod.Moneda,
                                FechaApertura = prod.FechaApertura,
                                CreditoAprobado = !string.IsNullOrEmpty(prod.CreditoAprobado) ? Convert.ToDecimal(prod.CreditoAprobado) : 0,
                                TotalAdeudado = !string.IsNullOrEmpty(prod.TotalAdeudado) ? Convert.ToDecimal(prod.TotalAdeudado.Replace("(","").Replace(")", "")) : 0,
                                Acreedor = prod.Afiliado,
                                Cuota = !string.IsNullOrEmpty(prod.Cuota) ? Convert.ToDecimal(prod.Cuota.Replace("(", "").Replace(")", "")) : 0,
                                Estatus = prod.EstatusUltimo.ToUpper().Trim(),
                                EstatusModificado = prod.EstatusUltimo.ToUpper().Trim(),
                                EsActivo = prod.Estatus.Trim() == "1",
                                AtrasoTotal = !string.IsNullOrEmpty(prod.TotalAtraso) ? Convert.ToDecimal(prod.TotalAtraso.Replace("(", "").Replace(")", "")) : 0,
                                VecesVencido30 = !string.IsNullOrEmpty(prod.VecesAtraso30) ? Convert.ToInt32(prod.VecesAtraso30.Replace("(", "").Replace(")", "")) : 0,
                                VecesVencido60 = !string.IsNullOrEmpty(prod.VecesAtraso60) ? Convert.ToInt32(prod.VecesAtraso60.Replace("(", "").Replace(")", "")) : 0,
                                VecesVencido90 = !string.IsNullOrEmpty(prod.VecesAtraso90) ? Convert.ToInt32(prod.VecesAtraso90.Replace("(", "").Replace(")", "")) : 0,
                                VecesVencido120 = !string.IsNullOrEmpty(prod.VecesAtraso120) ? Convert.ToInt32(prod.VecesAtraso120.Replace("(", "").Replace(")", "")) : 0,
                                FechaUltimaTransaccion = prod.FechaUltimaTransaccion,
                                MesConsolidado = prod.MesConsolidado,
                                Sector = ""
                            };

                            credito.CreditoDisponible = (desgloce.Cod.Equals("TCR") ? credito.CreditoAprobado - credito.TotalAdeudado : 0);
                            credito.CreditosMas60Dias = (credito.VecesVencido60 > 0 ? "SI" : "NO");
                            credito.VecesMas30Dias = credito.VecesVencido30 + credito.VecesVencido60 + credito.VecesVencido90 + credito.VecesVencido120;
                            credito.VecesMas60Dias = credito.VecesVencido60 + credito.VecesVencido90 + credito.VecesVencido120;
                            credito.FechaCreacion = DateTime.Now;

                            creditos.Add(credito);
                        }
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }

            return creditos;
        }
    }
}
