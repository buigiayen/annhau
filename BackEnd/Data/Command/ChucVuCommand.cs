using BackEnd.Data.SQLConnection;
using BackEnd.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Data.Command
{
    public class ChucVuCommand : interfaces.IChucVu
    {
        public async Task<SQLObject.APIresult> DeleteChucVuasync(NoiQui NoiQui)
        {
            throw new NotImplementedException();
        }

        public async Task<SQLObject.APIresult> GetChucVuasync()
        {
            string SQL = "select * from ChucVu";
            return await SQLConnection.SQLConnection.Connection().SQLQuerryAsync(SQL);
        }

        public async Task<SQLObject.APIresult> POSTChucVuasync(NoiQui NoiQui)
        {
            throw new NotImplementedException();
        }

        public async Task<SQLObject.APIresult> UpdateChucVuasync(NoiQui NoiQui)
        {
            throw new NotImplementedException();
        }
    }
}
