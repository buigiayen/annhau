using BackEnd.Data.SQLConnection;
using BackEnd.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Data.Command
{
    public class EmailCommand : interfaces.IEmail
    {
        private SQLObject.APIresult aPIresult = null;
        public async Task<SQLObject.APIresult> GetListSendEmailasync(Email email)
        {
            throw new NotImplementedException();
        }

        public async Task<SQLObject.APIresult> SendEmailasync(Email email)
        {
       
            aPIresult = new SQLObject.APIresult();
            try
            {
                aPIresult.code = SQLObject.Enums.Httpstatuscode_API.OK;
                aPIresult.Data = await infrastructure.SendEmail.SendEmails(email);
                aPIresult.Messenger = "Send";
            }
            catch (Exception ex)
            {
                aPIresult.code = SQLObject.Enums.Httpstatuscode_API.ERROR;
                aPIresult.Data = null;
                aPIresult.Messenger = ex.Message.ToString();
            }
            return aPIresult;
        }
    }
}
