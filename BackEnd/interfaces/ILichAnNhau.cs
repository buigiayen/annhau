using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.interfaces
{
    public interface ILichAnNhau
    {
        Task<Data.SQLConnection.SQLObject.APIresult> GetLichAnNhauasync();
        Task<Data.SQLConnection.SQLObject.APIresult> PostLichAnNhauasync(Model.LichAnNhau LichAnNhau);
        Task<Data.SQLConnection.SQLObject.APIresult> PutLichAnNhauasync(Model.LichAnNhau LichAnNhau);
        Task<Data.SQLConnection.SQLObject.APIresult> DeleteLichAnNhauasync(Model.LichAnNhau LichAnNhau);
    }
}
