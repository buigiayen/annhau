using Minio;
using Minio.DataModel;
using Minio.Exceptions;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reactive.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace BackEnd.infrastructure
{
    public static class MinioUpload
    {
        public static string ConnectionString = string.Empty;
        public static MinioClient ConnectionMinio()
        {
            var strConn = ConnectionString.Split('|');
            string Endpoin = strConn[0];
            string AccessKey = strConn[1];
            string secretKey = strConn[2];
            int port = Convert.ToInt32(strConn[3]);
            MinioClient minio = new MinioClient().WithEndpoint(Endpoin, port).WithCredentials(AccessKey, secretKey).WithSSL(false).Build();
            return minio;
        }
        public static async Task<List<string>> GetlistInBucket(this MinioClient minio)
        {
            List<string> buget = new List<string>();
            var getListBucketsTask = await minio.ListBucketsAsync();
            foreach (Bucket bucket in getListBucketsTask.Buckets)
            {
                buget.Add(bucket.Name);
            }
            return buget;
        }
        public static async Task UploadFile(this MinioClient minio, string bucket, string filepath, string filename)
        {

            var bucketName = bucket.ToLower();
            var objectName = filename;
            try
            {
                bool found = await minio.BucketExistsAsync(bucketName);
                if (!found)
                {
                    await minio.MakeBucketAsync(bucketName);
                }
                // Upload a file to bucket.

                await minio.PutObjectAsync(new PutObjectArgs().WithBucket(bucket).WithObject(objectName).WithFileName(filepath).WithContentType("application/octet-stream"));

            }
            catch (MinioException ex)
            {

            }
        }
        public static async Task UploadFile(this MinioClient minio, string bucket, Stream streamFile, string filename)
        {

            var bucketName = bucket;
            var objectName = filename;
            try
            {
                bool found = await minio.BucketExistsAsync(bucketName);
                if (!found)
                {
                    await minio.MakeBucketAsync(bucketName);
                }
                // Upload a file to bucket.
                await minio.PutObjectAsync(new PutObjectArgs().WithBucket(bucket).WithObject(filename).WithStreamData(streamFile).WithObjectSize(streamFile.Length)).ConfigureAwait(false);
            }
            catch (MinioException ex)
            {

                throw;
            }
         

        }
        public static async Task<List<Model.MinIOModel>> FileBucket(this MinioClient minio, string bucketname)
        {
            List<Model.MinIOModel> minioClasses = new List<Model.MinIOModel>();
            List<string> FileName = new List<string>();
            var bucketName = bucketname;
            var minioFilebucket = minio.ListObjectsAsync(bucketName, recursive: true).ToList();
            minioFilebucket.Subscribe(
               //item => actiona(item, ref FileName),
               item =>
               {
                   foreach (var xx in item)
                   {
                       FileName.Add(xx.Key);
                   }
               },
               ex => Console.WriteLine("OnError: {0}", ex.Message),
               () => Console.WriteLine("OnComplete: {0}"));
            Thread.Sleep(5000);
            Model.MinIOModel minioClass = new Model.MinIOModel();
            minioClass.bucket = bucketname;
            foreach (var item in FileName)
            {
                minioClass.fileBucketMinios.Add(new Model.FileBucketMinio { FileName = item });
            }
            minioClasses.Add(minioClass);
            return minioClasses;

        }
        public static async Task<bool> NewBucket(this MinioClient minio, string bucketName)
        {

            try
            {
                await minio.MakeBucketAsync(bucketName);
                return true;
            }
            catch (MinioException ex)
            {
                return false;
            }

        }
        public static async Task DownloadFile(this MinioClient minio, string Bucket, string Path, string ObjectFile, string PathLocal)
        {
            try
            {
                var bucketName = Bucket + Path;
                string FileName = System.IO.Path.Combine(PathLocal, ObjectFile);
                await minio.GetObjectAsync(bucketName, ObjectFile, FileName);

            }
            catch (Exception)
            {

                throw;
            }

        }
    }
}
