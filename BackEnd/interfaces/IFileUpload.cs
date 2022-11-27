using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.interfaces
{
    public interface IFileUpload
    {
        Task<Data.SQLConnection.SQLObject.APIresult> GetAllBucketasync();
        Task<Data.SQLConnection.SQLObject.APIresult> GetFileasync(Model.FileUpload fileUpload);
        Task<Data.SQLConnection.SQLObject.APIresult> PostFilesync(Model.FileUpload fileUpload);
        Task<Data.SQLConnection.SQLObject.APIresult> DeleteFilesync(Model.FileUpload fileUpload);
        Task<Data.SQLConnection.SQLObject.APIresult> MoveFilesync(Model.FileUpload fileUpload);
        Task<Data.SQLConnection.SQLObject.APIresult> BackUpFilesync(Model.FileAction FileAction);


    }
}
