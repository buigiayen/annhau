using BackEnd.Data.SQLConnection;
using BackEnd.interfaces;
using BackEnd.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Data.Command
{
    public class ThanhVienCommand : IThanhVien
    {
        public async Task<List<SQLObject.APIresult>> GetThanHVien(ThanhVien thanhVien)
        {
            string sqlCommand = "SELECT  ID, TenThanhVien, NoiDungNgan, IDChucVu, Avatar, HienThi, Email FROM ThanhVien";
            return await SQLConnection.SQLConnection.Connection().SQLQuerryAsync(sqlCommand);
        }
    }
}
