using BackEnd.interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEnd.Model;
using BackEnd.infrastructure;

namespace BackEnd.Data.Command
{
    public class MinioCommand : IMiniIO
    {
        public async Task DeleteBucketasync(MinIOModel minIO)
        {
            throw new NotImplementedException();
        }

        public async Task DeleteFileBucketasync<T>(MinIOModel minIO)
        {
            throw new NotImplementedException();
        }

        public async Task<List<MinIOModel>> GetAllBucket()
        {
            List<MinIOModel> listMinioBucket = new List<MinIOModel>();
            try
            {
                var data = await infrastructure.MinioUpload.ConnectionMinio().ListBucketsAsync().ConfigureAwait(false);
                if (data != null)
                {
                    foreach (var item in data.Buckets)
                    {
                        listMinioBucket.Add(new MinIOModel { bucket = item.Name });
                    }
                }
            }
            catch (Exception ex)
            {

                throw;
            }
           
            return listMinioBucket;
        }


        public async Task<List<FileBucketMinio>> GetAllFileBucket(MinIOModel MinIOModel)
        {
            List<FileBucketMinio> fileBucketMinios = new List<FileBucketMinio>();
            var data = await infrastructure.MinioUpload.ConnectionMinio().FileBucket(MinIOModel.bucket);
            if (data.Any())
            {
                foreach (var item in data?.FirstOrDefault().fileBucketMinios)
                {
                    fileBucketMinios.Add(new FileBucketMinio { FileName = item.FileName });
                }
            }

            return fileBucketMinios;
        }


        public async Task<bool> NewBucketasync(MinIOModel minIOModel)
        {
            bool resutl = await infrastructure.MinioUpload.ConnectionMinio().NewBucket(minIOModel.bucket);
            return resutl;
        }

        public async Task TransferFileBucketasync(MinIOModel minIOModel)
        {
            try
            {
                var FileBucketMinios = minIOModel;
                await infrastructure.MinioUpload.ConnectionMinio().UploadFile(FileBucketMinios.bucket, FileBucketMinios.fileBucketMinios.FirstOrDefault().FilePath, FileBucketMinios.fileBucketMinios.FirstOrDefault().FileName);
            }
            catch (Exception ex)
            {

                throw;
            }
         

        }

        public Task TransferFileBucketasync()
        {
            throw new NotImplementedException();
        }
    }
}
