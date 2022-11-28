using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.interfaces
{
    public interface IEmail
    {
        Task<Data.SQLConnection.SQLObject.APIresult> GetListSendEmailasync(Model.Email email);
        Task<Data.SQLConnection.SQLObject.APIresult> SendEmailasync(Model.Email email);
    }
}
