using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Data.SQLConnection
{
    public class SQLObject
    {
        public class Enums
        {
            public enum Httpstatuscode_API
            {
                OK = 200,
                ERROR = 401,
                NULL = 402,
                WARN = 403,
            }
        }
        public class APIresult
        {
            public Enums.Httpstatuscode_API code { get; set; } = Enums.Httpstatuscode_API.OK;
            public dynamic Data { get; set; }
            public string Messenger { get; set; } = "Success!";
        }

    }
}
