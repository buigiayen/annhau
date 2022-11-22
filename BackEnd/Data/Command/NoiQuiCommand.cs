using BackEnd.Data.SQLConnection;
using BackEnd.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Data.Command
{
    public class NoiQuiCommand : interfaces.INoiQui
    {
        private Dictionary<string, object> _dic = null;
        public async Task<SQLObject.APIresult> GetNoiQuiasync(NoiQui NoiQui)
        {
            string SQL = "select * from NoiQuy";
            return await SQLConnection.SQLConnection.Connection().SQLQuerryAsync(SQL);
        }

        public async Task<SQLObject.APIresult> UpdateNoiQuiasync(NoiQui NoiQui)
        {
            _dic = new Dictionary<string, object>();
            string SQL = "update  NoiQuy set NoiDung=@NoiDung , NgayBanHanh=@NgayBanHanh";
            _dic.Add("NoiDung", NoiQui.NoiDung);
            _dic.Add("NgayBanHanh", NoiQui.NgayBanHanh);
            return await SQLConnection.SQLConnection.Connection().ExcuteQuerryAsync(SQL, _dic);
        }
    }
}
