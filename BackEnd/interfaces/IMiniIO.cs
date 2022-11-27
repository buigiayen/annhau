using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEnd.Model;

namespace BackEnd.interfaces
{
    public interface IMiniIO
    {
        Task<List<MinIOModel>> GetAllBucket();
        Task<List<FileBucketMinio>> GetAllFileBucket(MinIOModel uploadMinios);
        Task<bool> NewBucketasync(MinIOModel minIOModel);
        Task DeleteBucketasync(MinIOModel minIO);
        Task TransferFileBucketasync();
        Task DeleteFileBucketasync<T>(MinIOModel minIO);
    }
}
