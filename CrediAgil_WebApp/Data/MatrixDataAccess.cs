using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using UI.WEB.Models;
using UI.WEB.Models.POCO;

namespace UI.WEB.Data
{
    public class MatrixDataAccess
    {
        UI_Context _context;
        IConfiguration _configuration;

        public MatrixDataAccess(UI_Context context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public List<ModeloMatrizTransicion> ObtenerMatrizTransicion(string situacion, string clasificacion)
        {
            List<ModeloMatrizTransicion> model = new List<ModeloMatrizTransicion>();
            SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));

            conn.Open();

            SqlCommand command = conn.CreateCommand();

            command.CommandText = "[hubtcnc2_buro].[ObtenerMatrizTransicion]";
            command.CommandType = System.Data.CommandType.StoredProcedure;

            command.Parameters.AddWithValue("@Situacion", (situacion + ""));
            command.Parameters.AddWithValue("@Clasificacion", (clasificacion + ""));


            SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                model.Add(new ModeloMatrizTransicion()
                {
                    Tag = reader["Tag"].ToString(),
                    Valor1 = (int)reader["Valor1"],
                    Valor2 = (int)reader["Valor2"],
                    Valor3 = (int)reader["Valor3"],
                    Valor4 = (int)reader["Valor4"],
                    Valor5 = (int)reader["Valor5"],
                    Valor6 = (int)reader["Valor6"],
                    Valor7 = (int)reader["Valor7"],
                    Valor8 = (int)reader["Valor8"],
                    Valor9 = (int)reader["Valor9"],
                    Valor10 = (int)reader["Valor10"],
                    Valor11 = (int)reader["Valor11"],
                    Valor12 = (int)reader["Valor12"],
                    Valor13 = (int)reader["Valor13"],
                    Valor14 = (int)reader["Valor14"],
                    Total = (int)reader["Total"]
                });
            }

            conn.Close();
            conn.Dispose();
            command.Dispose();
            reader.Dispose();

            return model;
        }

        public List<ModeloClasificacionCrediticia> ObtenerClasificacionCrediticia(int mes, int anio)
        {
            List<ModeloClasificacionCrediticia> model = new List<ModeloClasificacionCrediticia>();

            try
            {
                using (SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
                {
                    conn.Open();

                    using (SqlCommand command = conn.CreateCommand())
                    {
                        command.CommandText = "[dbo].[ObtenerClasificacionCrediticia]";
                        command.CommandType = System.Data.CommandType.StoredProcedure;

                        command.Parameters.AddWithValue("@Month", mes);
                        command.Parameters.AddWithValue("@Year", anio);

                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                model.Add(new ModeloClasificacionCrediticia()
                                {
                                    Etiqueta = reader["Etiqueta"].ToString(),
                                    A = (int)reader["A"],
                                    B = (int)reader["B"],
                                    C = (int)reader["C"],
                                    D = (int)reader["D"],
                                    E = (int)reader["E"],
                                    Total = (int)reader["Total"]
                                });
                            }
                        }
                    }
                }
            }
            catch (System.Exception)
            {
                //Logs Here
                throw;
            }

            return model;
        }

        public List<ModeloClasificacionCrediticiaMonto> ObtenerClasificacionCrediticiaMonto(int mes, int anio)
        {
            List<ModeloClasificacionCrediticiaMonto> model = new List<ModeloClasificacionCrediticiaMonto>();

            try
            {
                using (SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
                {
                    conn.Open();

                    using (SqlCommand command = conn.CreateCommand())
                    {
                        command.CommandText = "[dbo].[ObtenerClasificacionCrediticia_Monto]";
                        command.CommandType = System.Data.CommandType.StoredProcedure;

                        command.Parameters.AddWithValue("@Month", mes);
                        command.Parameters.AddWithValue("@Year", anio);

                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                model.Add(new ModeloClasificacionCrediticiaMonto()
                                {
                                    Etiqueta = reader["Etiqueta"].ToString(),
                                    A = (decimal)reader["A"],
                                    B = (decimal)reader["B"],
                                    C = (decimal)reader["C"],
                                    D = (decimal)reader["D"],
                                    E = (decimal)reader["E"],
                                    Total = (decimal)reader["Total"]
                                });
                            }
                        }
                    }
                }
            }
            catch (System.Exception)
            {
                //Logs Here
                throw;
            }

            return model;
        }
    }
}
