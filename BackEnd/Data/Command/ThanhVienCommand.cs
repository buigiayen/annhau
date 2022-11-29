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
        private Dictionary<string, object> _dic = null;
        public async Task<SQLObject.APIresult> GetThanHVien(ThanhVien thanhVien)
        {
            _dic = new Dictionary<string, object>();
            string sqlCommand = "SELECT      ThanhVien.Token,   ThanhVien.ID, ThanhVien.TenThanhVien, ThanhVien.NoiDungNgan, ThanhVien.IDChucVu, ThanhVien.Avatar, ThanhVien.HienThi, ChucVu.TenChucVu, ThanhVien.email FROM ThanhVien INNER JOIN ChucVu ON ThanhVien.IDChucVu = ChucVu.ID where 1=1 ";
            if (thanhVien.ID != null)
            {
                sqlCommand += " and ThanhVien.ID=@ID";
                _dic.Add("ID", thanhVien.ID);
            }
            return await SQLConnection.SQLConnection.Connection().SQLQuerryAsync(sqlCommand, _dic);
        }

        public async Task<SQLObject.APIresult> SuaThanhVien(ThanhVien thanhVien)
        {
            _dic = new Dictionary<string, object>();
            string sqlCommand = "update ThanhVien set  TenThanhVien= @TenThanhVien, NoiDungNgan=@NoiDungNgan, IDChucVu=@IDChucVu, Avatar=@Avatar, HienThi=@HienThi where ID=@ID";
            _dic.Add("ID", thanhVien.ID);
            _dic.Add("TenThanhVien", thanhVien.TenThanhVien);
            _dic.Add("NoiDungNgan", thanhVien.NoiDungNgan);
            _dic.Add("IDChucVu", thanhVien.IDChucVu);
            _dic.Add("HienThi", thanhVien.HienThi);
            _dic.Add("Avatar", thanhVien.Avatar);
            _dic.Add("Email", thanhVien.Email);
            _dic.Add("Email", thanhVien.ID);
            return await SQLConnection.SQLConnection.Connection().SQLQuerryAsync(sqlCommand, _dic);
        }

        public async Task<SQLObject.APIresult> TaoMoiThanhVien(ThanhVien thanhVien)
        {
            _dic = new Dictionary<string, object>();
            string sqlCommand = "INSERT INTO [dbo].[ThanhVien] ([TenThanhVien] ,[NoiDungNgan] ,[IDChucVu] ,[Avatar] ,[Email]) values " +
                "(@TenThanhVien,@NoiDungNgan, @IDChucVu ,@Avatar, @Email)";
            _dic.Add("ID", thanhVien.ID);
            _dic.Add("TenThanhVien", thanhVien.TenThanhVien);
            _dic.Add("NoiDungNgan", thanhVien.NoiDungNgan);
            _dic.Add("IDChucVu", thanhVien.IDChucVu);
            _dic.Add("Avatar", thanhVien.Avatar);
            _dic.Add("Email", thanhVien.Email);
            return await SQLConnection.SQLConnection.Connection().ExcuteQuerryAsync(sqlCommand, _dic);
        }

        public async Task<SQLObject.APIresult> XoaThanhVien(ThanhVien thanhVien)
        {
            _dic = new Dictionary<string, object>();
            string sqlCommand = "update ThanhVien set HienThi=@HienThi where ID=@ID";
            _dic.Add("ID", thanhVien.ID);
            _dic.Add("HienThi", thanhVien.HienThi);
            return await SQLConnection.SQLConnection.Connection().SQLQuerryAsync(sqlCommand, _dic);
        }
    }
}
