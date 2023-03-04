using System.Collections.Generic;
using System.IO;
using System.Xml.Serialization;

namespace UI.WEB.Models.POCO
{
    [XmlRoot("DCR")]
    public class DataCreditModel
    {
        [XmlElement("Individuo")]
        public Individuo Individuo { get; set; }
        
        [XmlElement("ErrorHandling")]
        public ErrorHandling ErrorHandling { get; set; }
        
        [XmlElement("Foto")]
        public string Foto { get; set; }

        [XmlElement("Xcore_PD12M_ALL_PC_NC_Global")]
        public XcoreGlobal XcoreGlobal { get; set; }


        [XmlElement("DeudasPorProducto")]
        public DeudasPorProducto DeudasPorProducto { get; set; }

        [XmlElement("DeudasPorAcreedor")]
        public DeudasPorAcreedor DeudasPorAcreedor { get; set; }

        [XmlElement("AnalisisCrediticio")]
        public AnalisisCrediticio AnalisisCrediticio { get; set; }

        [XmlElement("DesgloseCreditos")]
        public DesgloseCreditos DesgloseCreditos { get; set; }
        
        [XmlElement("Direcciones")]
        public Direcciones Direcciones { get; set; }

        [XmlElement("Telefonos")]
        public Telefonos Telefonos { get; set; }
    }

    public class ErrorHandling
    {
        public int Id { get; set; }
        public string Description { get; set; }
    }
    public class Individuo
    {
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string Apellidos1 { get; set; }
        public string Apellidos2 { get; set; }
        public string CedulaNueva { get; set; }
        public string CedulaVieja { get; set; }
        public string Pasaporte { get; set; }
        public string Edad { get; set; }
        public string FechaNacimiento { get; set; }
        public string LugarNacimiento { get; set; }
        public string EstadoCivil { get; set; }
        public string Ocupacion { get; set; }
        public string Categoria { get; set; }
        public string Conyugue { get; set; }
        public string CedulaConyugue { get; set; }
        public string Sexo { get; set; }
        public string Nacionalidad { get; set; }
        public string Madre { get; set; }
        public string Padre { get; set; }
    }

    public class XcoreGlobal
    {
        [XmlElement("Xcore")]
        public decimal Xcore { get; set; }

        [XmlElement("Categoria_de_Riesgo")]
        public string CategoriaRiesgo { get; set; }

        [XmlElement("Probabilidad_de_incumplimiento")]
        public decimal ProbabilidadIncumplimiento { get; set; }

        [XmlElement("HorizonteTiempo")]
        public HorizonteTiempo HorizonteTiempo { get; set; }
        
        [XmlElement("Odds")]
        public Odds Odds { get; set; }

        [XmlElement("Mes_evaluacion")]
        public string MesEvaluacion { get; set; }
    }
    public class HorizonteTiempo
    {
        public decimal Desde { get; set; }
        public decimal Hasta { get; set; }
    }
    public class Odds
    {
        [XmlElement("Odds_A_Favor")]
        public string OddsFavor { get; set; }

        [XmlElement("Odds_EnContra")]
        public string OddsEnContra { get; set; }

        [XmlElement("ObligorAzar")]
        public string ObligorAzar { get; set; }

        [XmlElement("ObligorIncumplimiento")]
        public string ObligorIncumplimiento { get; set; }

        [XmlElement("PorcientoDeudorIncumplimiento")]
        public string PorcDeudIncumplimiento { get; set; }

        [XmlElement("PorcientoDeudorNoIncumplimiento")]
        public string PorcDeudNoIncumplimiento { get; set; }

        [XmlElement("QuantilPoblacion")]
        public string QuantilPoblacion { get; set; }
    }

    public class DeudasPorProducto
    {
        [XmlElement("Producto")]
        public List<Producto> Producto { get; set; }

        [XmlElement("Total")]
        public Total Total { get; set; }
    }
    public class Producto
    {
        [XmlAttribute]
        public string Nombre { get; set; }

        [XmlElement]
        public string EstatusImg { get; set; }

        [XmlElement]
        public string EstatusImg2 { get; set; }

        [XmlElement]
        public string CantidadCuentas { get; set; }

        [XmlElement]
        public string CreditoAprobado { get; set; }

        [XmlAttribute]
        public string MonedaProducto { get; set; }

        [XmlElement]
        public string TotalAdeudado { get; set; }

        [XmlElement]
        public string Cuota { get; set; }

        [XmlElement]
        public string EnAtraso { get; set; }

        [XmlElement]
        public string EnLegal { get; set; }

        [XmlElement]
        public string Castigado { get; set; }
    }
    public class Total
    {
        [XmlAttribute("monedaTotal")]
        public string MonedaTotal { get; set; }

        [XmlElement("Total_CreditoAprobado")]
        public string TotalCreditoAprobado { get; set; }

        [XmlElement("Total_Adeudado")]
        public string TotalAdeudado { get; set; }

        [XmlElement("Total_Cuota")]
        public string TotalCuota { get; set; }

        [XmlElement("Total_EnAtraso")]
        public string TotalEnAtraso { get; set; }

        [XmlElement("Total_EnLegal")]
        public string TotalEnLegal { get; set; }

        [XmlElement("Total_Castigado")]
        public string TotalCastigado { get; set; }
    }

    public class DeudasPorAcreedor
    {
        [XmlElement("Acreedor")]
        public List<Acreedor> Acreedor { get; set; }

        [XmlElement("Total")]
        public Total Total { get; set; }
    }
    public class Acreedor
    {
        [XmlAttribute("Moneda")]
        public string MonedaAcreedor { get; set; }
        
        [XmlElement]
        public string Afiliado { get; set; }

        [XmlElement]
        public string EstatusImg { get; set; }

        [XmlElement]
        public string Sector { get; set; }

        [XmlElement]
        public string CantidadCuentas { get; set; }

        [XmlElement]
        public string CreditoAprobado { get; set; }

        [XmlElement]
        public string TotalAdeudado { get; set; }

        [XmlElement]
        public string Cuota { get; set; }

        [XmlElement]
        public string EnAtraso { get; set; }

        [XmlElement]
        public string EnLegal { get; set; }

        [XmlElement]
        public string Castigado { get; set; }
    }

    public class AnalisisCrediticio
    {
        [XmlElement("CantidadTotalCuentas")]
        public CantidadTotalCuentas CantidadTotalCuentas { get; set; }

        [XmlElement("AnalisisCreditos")]
        public AnalisisCreditos AnalisisCreditos { get; set; }

        [XmlElement("AnalisisAtrasos")]
        public AnalisisAtrasos AnalisisAtrasos { get; set; }
    }

    public class CantidadTotalCuentas
    {
        [XmlElement("Moneda")]
        public List<MonedaAnalisisCrediticio> MonedaAnalisisCrediticio { get; set; }

        [XmlElement("Totales")]
        public TotalesAnalisisCrediticio TotalesAnalisisCrediticio { get; set; }
    }
    public class MonedaAnalisisCrediticio
    {
        [XmlAttribute("Id")]
        public string Id { get; set; }

        [XmlElement]
        public string Cuentas { get; set; }

        [XmlElement]
        public string Cerradas { get; set; }

        [XmlElement]
        public string Abiertas { get; set; }

        [XmlElement]
        public string Normal { get; set; }

        [XmlElement]
        public string EnAtraso { get; set; }

        [XmlElement]
        public string AcuerdoPago { get; set; }

        [XmlElement]
        public string EnLegal { get; set; }

        [XmlElement]
        public string Castigado { get; set; }
    }
    public class TotalesAnalisisCrediticio
    {
        public string Cuentas { get; set; } = "";
		public string Cerradas { get; set; } = "";
        public string Abiertas { get; set; } = "";
        public string Normal { get; set; } = "";
        public string EnAtraso { get; set; } = "";
        public string AcuerdoPago { get; set; } = "";
        public string EnLegal { get; set; } = "";
        public string Castigado { get; set; } = "";
    }
    
    public class AnalisisCreditos
    {
        [XmlElement("Moneda")]
        public List<AnalisisCreditosMoneda> AnalisisCreditosMoneda { get; set; }
    }
    public class AnalisisCreditosMoneda
    {
        [XmlAttribute]
        public string Id { get; set; }

        [XmlElement("MasReciente")]
        public AnalisisCreditosMonedaVal MasReciente { get; set; }

        [XmlElement("MasAntiguo")]
        public AnalisisCreditosMonedaVal MasAntiguo { get; set; }

        [XmlElement("MenorAprobado")]
        public AnalisisCreditosMonedaVal MenorAprobado { get; set; }

        [XmlElement("MayorAdeudado")]
        public AnalisisCreditosMonedaVal MayorAdeudado { get; set; }
    }
    public class AnalisisCreditosMonedaVal
    {
        [XmlElement]
        public string Fecha { get; set; }

        [XmlElement]
        public string Anos { get; set; }

        [XmlElement]
        public string Monto { get; set; }
    }    

    public class AnalisisAtrasos
    {
        [XmlElement("Moneda")]
        public List<AnalisisAtrasosMoneda> AnalisisAtrasosMoneda { get; set; }
    }
    public class AnalisisAtrasosMoneda
    {
        [XmlAttribute]
        public string Id { get; set; }

        [XmlElement("MasReciente")]
        public AnalisisAtrasosMonedaVal MasReciente { get; set; }

        [XmlElement("MasAntiguo")]
        public AnalisisAtrasosMonedaVal MasAntiguo { get; set; }

        [XmlElement("MayorMontoAtraso")]
        public AnalisisAtrasosMonedaVal MayorMontoAtraso { get; set; }
    }
    public class AnalisisAtrasosMonedaVal
    {
        [XmlElement]
        public string Fecha { get; set; }

        [XmlElement]
        public string Anos { get; set; }

        [XmlElement]
        public string DiasAtraso { get; set; }

        [XmlElement]
        public string Monto { get; set; }
    }

    public class DesgloseCreditos
    {
        [XmlElement("Producto")]
        public List<ProductoDesgloseCreditos> ProductoDesgloseCreditos { get; set; }

        [XmlElement("TotalGeneral")]
        public List<TotalProducto> TotalGeneral { get; set; }
    }
    public class ProductoDesgloseCreditos
    {
        [XmlAttribute("Id")]
        public string Id { get; set; }

        [XmlAttribute("Cod")]
        public string Cod { get; set; }

        [XmlElement("Cuenta")]
        public List<CuentaProducto> CuentaProducto { get; set; }

        [XmlElement("Total")]
        public TotalProducto TotalProducto { get; set; }
    }
    public class CuentaProducto
    {
        [XmlElement]
        public string EstatusImg { get; set; }

        [XmlElement]
        public string EstatusImg2 { get; set; }

        [XmlElement]
        public string Estatus { get; set; }

        [XmlAttribute("Des_Estatus")]
        public string DesEstatus { get; set; }

        [XmlElement]
        public string Moneda { get; set; }

        [XmlAttribute("Des_Moneda")]
        public string Des_Moneda { get; set; }

        [XmlElement]
        public string Afiliado { get; set; }

        [XmlElement]
        public string FechaApertura { get; set; }

        [XmlElement]
        public string FechaReportado { get; set; }

        [XmlElement]
        public string MesConsolidado { get; set; }

        [XmlElement]
        public string FechaUltimaTransaccion { get; set; }

        [XmlElement]
        public string CreditoAprobado { get; set; }

        [XmlElement]
        public string TotalAdeudado { get; set; }

        [XmlElement]
        public string Cuota { get; set; }

        [XmlElement]
        public string TotalAtraso { get; set; }

        [XmlElement]
        public string VecesAtraso30 { get; set; }

        [XmlElement]
        public string VecesAtraso60 { get; set; }

        [XmlElement]
        public string VecesAtraso90 { get; set; }

        [XmlElement]
        public string VecesAtraso120 { get; set; }

        [XmlElement]
        public string EstatusUltimo { get; set; }

        [XmlElement]
        public string FDR { get; set; }
    }
    public class TotalProducto
    {
        [XmlAttribute("monedaTotal")]
        public string MonedaTotal { get; set; }

        [XmlElement("Total_CreditoAprobado")]
        public string Total_CreditoAprobado { get; set; }

        [XmlElement("Total_Adeudado")]
        public string Total_Adeudado { get; set; }

        [XmlElement("Total_Cuota")]
        public string Total_Cuota { get; set; }

        [XmlElement("Total_EnAtraso")]
        public string Total_EnAtraso { get; set; }

        [XmlElement("Total_Vencido")]
        public string Total_Vencido { get; set; }

        [XmlElement("Total_Cant_30D")]
        public string Total_Cant_30D { get; set; }

        [XmlElement("Total_Cant_60D")]
        public string Total_Cant_60D { get; set; }

        [XmlElement("Total_Cant_90D")]
        public string Total_Cant_90D { get; set; }

        [XmlElement("Total_Cant_120D")]
        public string Total_Cant_120D { get; set; }
    }

    public class Direcciones
    {
        [XmlElement("Dir")]
        public List<string> Direccion { get; set; }
    }

    public class Telefonos
    {
        [XmlElement("Tel")]
        public List<string> Telefono { get; set; }
    }
}
