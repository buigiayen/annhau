using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.interfaces
{
    public interface IThanhVien
    {
        Task<Data.SQLConnection.SQLObject.APIresult> GetThanHVien(Model.ThanhVien thanhVien);
        Task<Data.SQLConnection.SQLObject.APIresult> TaoMoiThanhVien(Model.ThanhVien thanhVien);
        Task<Data.SQLConnection.SQLObject.APIresult> SuaThanhVien(Model.ThanhVien thanhVien);
        Task<Data.SQLConnection.SQLObject.APIresult> XoaThanhVien(Model.ThanhVien thanhVien);
    }
}
