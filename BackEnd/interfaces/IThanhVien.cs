using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.interfaces
{
    public interface IThanhVien
    {
        Task<List<Data.SQLConnection.SQLObject.APIresult>> GetThanHVien(Model.ThanhVien thanhVien);
    }
}
