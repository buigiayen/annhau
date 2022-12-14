using BackEnd.Data.SQLConnection;
using BackEnd.interfaces;
using BackEnd.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Data.Command
{
    public class LichAnNhauCommand : ILichAnNhau
    {
        private Dictionary<string, object> _dic = null;
        public async Task<SQLObject.APIresult> DeleteLichAnNhauasync(LichAnNhau LichAnNhau)
        {
            _dic = new Dictionary<string, object>();
            _dic.Add("ID", LichAnNhau.ID);
            _dic.Add("Cancel", LichAnNhau.Cancel);
            string sql = "update LichAnNhau set Cancel = @Cancel where ID = @ID";
            return await SQLConnection.SQLConnection.Connection().ExcuteQuerryAsync(sql, _dic);
        }

        public async Task<SQLObject.APIresult> GetLichAnNhauasync(Model.LichAnNhau LichAnNhau)
        {
            _dic = new Dictionary<string, object>();
            string sql = "SELECT  LichAnNhau.ID AS IDLich, LichAnNhau.NoiDungAnNhau , LichAnNhau.NgayAnNhau, LichAnNhau.IDThanhVien , LichAnNhau.SoTienThanhToan , ThanhVien.TenThanhVien, ThanhVien.ID as IDThanhVien,  LichAnNhau.Cancel  FROM LichAnNhau INNER JOIN ThanhVien ON LichAnNhau.IDThanhVien = ThanhVien.ID where LichAnNhau.Cancel = 0 and 1=1";
            if (!string.IsNullOrEmpty(LichAnNhau.TextFind))
            {
                sql += " and  (LichAnNhau.ID like @TextFind or LichAnNhau.NoiDungAnNhau like '%' + @TextFind + '%' or LichAnNhau.SoTienThanhToan like '%' + @TextFind + '%')    ";
                _dic.Add("TextFind", LichAnNhau.TextFind);
            }
            if (LichAnNhau.FromDate != null && LichAnNhau.ToDate !=null)
            {
                sql += " and LichAnNhau.NgayAnNhau BETWEEN @DateFrom and @DateTo";
                _dic.Add("DateFrom", LichAnNhau.FromDate);
                _dic.Add("DateTo", LichAnNhau.ToDate);
            }
            return await SQLConnection.SQLConnection.Connection().SQLQuerryAsync(sql, _dic);
        }

        public async Task<SQLObject.APIresult> PostLichAnNhauasync(LichAnNhau LichAnNhau)
        {
            _dic = new Dictionary<string, object>();
            _dic.Add("NoiDungAnNhau", LichAnNhau.NoiDungAnNhau);
            _dic.Add("NgayAnNhau", LichAnNhau.NgayAnNhau);
            _dic.Add("IDThanhVien", LichAnNhau.IDThanhVien);
            _dic.Add("SoTienThanhToan", LichAnNhau.SoTienThanhToan);
            string sql = "insert  LichAnNhau (NoiDungAnNhau, NgayAnNhau, IDThanhVien,SoTienThanhToan) values (@NoiDungAnNhau, @NgayAnNhau, @IDThanhVien, @SoTienThanhToan)";
            return await SQLConnection.SQLConnection.Connection().ExcuteQuerryAsync(sql, _dic);
        }

        public async Task<SQLObject.APIresult> PutLichAnNhauasync(LichAnNhau LichAnNhau)
        {
            _dic = new Dictionary<string, object>();
            _dic.Add("ID", LichAnNhau.ID);
            _dic.Add("NoiDungAnNhau", LichAnNhau.NoiDungAnNhau);
            _dic.Add("NgayAnNhau", LichAnNhau.NgayAnNhau);
            _dic.Add("IDThanhVien", LichAnNhau.IDThanhVien);
            _dic.Add("SoTienThanhToan", LichAnNhau.SoTienThanhToan);
            string sql = "update LichAnNhau set NoiDungAnNhau=@NoiDungAnNhau, NgayAnNhau=@NgayAnNhau, IDThanhVien=@IDThanhVien,SoTienThanhToan=@SoTienThanhToan where ID=@ID ";
            return await SQLConnection.SQLConnection.Connection().ExcuteQuerryAsync(sql, _dic);
        }
    }
}
