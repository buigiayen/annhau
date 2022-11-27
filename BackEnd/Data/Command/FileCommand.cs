using BackEnd.Data.SQLConnection;
using BackEnd.Model;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Data.Command
{
    public class FileCommand : interfaces.IFileUpload
    {
        private Dictionary<string, object> _dic = null;
        private SQLObject.APIresult APIresult { get; set; }
        public static string FileRoot { get; set; } = AppDomain.CurrentDomain.BaseDirectory;
        public static string FileBackUp { get; set; } = AppDomain.CurrentDomain.BaseDirectory;
        public async Task<SQLObject.APIresult> DeleteFilesync(Model.FileUpload fileUpload)
        {
            throw new NotImplementedException();
        }

        public async Task<SQLObject.APIresult> GetFileasync(Model.FileUpload fileUpload)
        {
            throw new NotImplementedException();
        }

        public async Task<SQLObject.APIresult> PostFilesync(Model.FileUpload fileUpload)
        {
            var EndPoin = infrastructure.MinioUpload.ConnectionString.Split('|');
            _dic = new Dictionary<string, object>();
            APIresult = new SQLObject.APIresult();
            try
            {
                if (fileUpload != null)
                {
                    var filePath = Path.Combine(FileRoot, fileUpload.FileRaw.FileName);
                    if (File.Exists(filePath)) { File.Delete(filePath); }
                    if (fileUpload.FileRaw.Length > 0)
                    {
                        MinioCommand minioCommand = new MinioCommand();
                        using (var stream = System.IO.File.Create(filePath))
                        {
                            await fileUpload.FileRaw.CopyToAsync(stream);
                            fileUpload.bucket = fileUpload.bucket ?? "foldernull";
                            fileUpload.fileBucketMinios.Add(new FileBucketMinio { FilePath = filePath, FileName = fileUpload.FileRaw.FileName });
                            minioCommand.TransferFileBucketasync(fileUpload);
                        
                        }

                    }
                    string SQL = "insert [File] (FilePath, Status) values (@FilePath, @Status)";
                    _dic.Add("FilePath", filePath);
                    _dic.Add("Status", Model.FileAction.FileActionControl.Transfer);
                    APIresult = await SQLConnection.SQLConnection.Connection().ExcuteQuerryAsync(SQL, _dic);
                    if (APIresult.code == SQLObject.Enums.Httpstatuscode_API.OK)
                    {
                        System.IO.File.Delete(filePath);
                        APIresult.Data = new Model.FileUpload()
                        {
                            ID = new Guid(),
                            FilePath = string.Format("{0}:{1}/{2}/{3}", EndPoin[0], EndPoin[3], fileUpload.bucket, fileUpload.FileRaw.FileName),
                            FileSize = fileUpload.FileSize,
                            bucket = fileUpload.bucket
                        };

                    }
                }

            }
            catch (Exception ex)
            {

                APIresult.code = SQLObject.Enums.Httpstatuscode_API.ERROR;
                APIresult.Data = null;
                APIresult.Messenger = $"Upload File Error!: {ex.ToString()}";
            }
            return APIresult;
        }
        public async Task<SQLObject.APIresult> BackUpFilesync(Model.FileAction fileAction)
        {
            throw new NotImplementedException();
        }

        public async Task<SQLObject.APIresult> MoveFilesync(FileUpload fileUpload)
        {
            throw new NotImplementedException();
        }
        public async Task<SQLObject.APIresult> GetAllBucketasync()
        {
            APIresult = new SQLObject.APIresult();
            MinioCommand minioCommand = new MinioCommand();
            try
            {
                APIresult.code = SQLObject.Enums.Httpstatuscode_API.OK;
                APIresult.Data = await minioCommand.GetAllBucket();
                APIresult.Messenger = "Success!";
            }
            catch (Exception ex)
            {
                APIresult.code = SQLObject.Enums.Httpstatuscode_API.ERROR;
                APIresult.Data = null;
                APIresult.Messenger = $"Error! {ex.ToString()}";
            }


            return APIresult;
        }
    }
}
