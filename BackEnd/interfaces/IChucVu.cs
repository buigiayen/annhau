using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.interfaces
{
    public interface IChucVu
    {
        Task<Data.SQLConnection.SQLObject.APIresult> GetChucVuasync();
        Task<Data.SQLConnection.SQLObject.APIresult> POSTChucVuasync(Model.NoiQui NoiQui);
        Task<Data.SQLConnection.SQLObject.APIresult> UpdateChucVuasync(Model.NoiQui NoiQui);
        Task<Data.SQLConnection.SQLObject.APIresult> DeleteChucVuasync(Model.NoiQui NoiQui);
    }
}
