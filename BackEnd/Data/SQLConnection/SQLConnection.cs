using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Data.SqlClient;

namespace BackEnd.Data.SQLConnection
{
    public static class SQLConnection
    {
        private static string KEYCONNECTION = Environment.GetEnvironmentVariable("SQLCONNECTION");
        private static SQLObject.APIresult aPIresults = null;
        public static SqlConnection Connection()
        {
            SqlConnection connection = new SqlConnection(KEYCONNECTION);
            return connection;
        }

        public static async Task<SQLObject.APIresult> SQLQuerryAsync(this SqlConnection Connection, string sql, Dictionary<string, object> _dic = null)
        {
            aPIresults = new SQLObject.APIresult();
            try
            {
                var para = new DynamicParameters(_dic);
                var data = await Connection.ExecuteAsync(sql, para ?? null);
                aPIresults = new SQLObject.APIresult { code = SQLObject.Enums.Httpstatuscode_API.OK, Data = data, Messenger = "Success!" };

            }
            catch (Exception ex)
            {
                aPIresults = new SQLObject.APIresult { code = SQLObject.Enums.Httpstatuscode_API.ERROR, Data = null, Messenger = ex.Message };

            }
            return aPIresults;
        }
        public static async Task<SQLObject.APIresult> ExcuteQuerryAsync(this SqlConnection Connection, string sql, Dictionary<string, object> _dic = null)
        {
            aPIresults = new SQLObject.APIresult();
            var para = new DynamicParameters(_dic);
            int valueTransaction = 0;
            try
            {

                Connection.Open();
                using (var sqlTransaction = Connection.BeginTransaction())
                {
                    try
                    {
                        valueTransaction = await Connection.ExecuteAsync(sql, para ?? null, sqlTransaction);
                        sqlTransaction.Commit();
                    }
                    catch (Exception ex)
                    {
                        sqlTransaction.Rollback();
                        valueTransaction = -2;
                    }
                }
                Connection.Close();


            }
            catch (Exception ex)
            {
                valueTransaction = -1;
            }
            return ReturnStatusSql(valueTransaction);
        }
        private static SQLObject.APIresult ReturnStatusSql(int status)
        {
            aPIresults = new SQLObject.APIresult();
            switch (status)
            {
                case -2: aPIresults =  new SQLObject.APIresult { code = SQLObject.Enums.Httpstatuscode_API.ERROR, Data = status, Messenger = "Error, Please check log transaction roll back " }; break;
                case -1: aPIresults =  new SQLObject.APIresult { code = SQLObject.Enums.Httpstatuscode_API.ERROR, Data = status, Messenger = "Error system, Please check log" }; break;
                default: aPIresults = new SQLObject.APIresult { code = SQLObject.Enums.Httpstatuscode_API.OK, Data = status, Messenger = "Success transaction commit" }; break;
            }
            return aPIresults;
        }
    }
}
