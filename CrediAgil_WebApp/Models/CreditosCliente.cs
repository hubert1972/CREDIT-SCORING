﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace UI.WEB.Models
{
    public partial class CreditosCliente
    {
        public int Id { get; set; }
        public string CodigoIdentificacion { get; set; }
        public string IdCredito { get; set; }
        public string IdFechaInicioProdMoneda { get; set; }
        public string TipoProducto { get; set; }
        public string GrupoProductos { get; set; }
        public string Destino { get; set; }
        public string Moneda { get; set; }
        public string FechaApertura { get; set; }
        public decimal? CreditoAprobado { get; set; }
        public decimal? TotalAdeudado { get; set; }
        public decimal? Cuota { get; set; }
        public int? CantidadDcuotas { get; set; }
        public string Estatus { get; set; }
        public string EstatusModificado { get; set; }
        public int? DiasVencidoHistorico { get; set; }
        public decimal? AtrasoTotal { get; set; }
        public string Acreedor { get; set; }
        public string Sector { get; set; }
        public decimal? CreditoDisponible { get; set; }
        public string FechaUltimaActual { get; set; }
        public string MesConsolidado { get; set; }
        public string FechaUltimaTransaccion { get; set; }
        public int? VecesVencido30 { get; set; }
        public int? VecesVencido60 { get; set; }
        public int? VecesVencido90 { get; set; }
        public int? VecesVencido120 { get; set; }
        public decimal? DefaultHistorico { get; set; }
        public int? DiasMora { get; set; }
        public int? DefaultActual { get; set; }
        public string CreditosMas60Dias { get; set; }
        public string PrestamoTarjetasJudicial { get; set; }
        public int? VecesMas30Dias { get; set; }
        public int? VecesMas60Dias { get; set; }
        public DateTime FechaCreacion { get; set; }
        public bool EsActivo { get; set; }
        public double? TasaIncumplimiento { get; set; }
        public int? MesesDesdeApertura { get; set; }
        public int? TotalIncumplimientos { get; set; }
    }
}