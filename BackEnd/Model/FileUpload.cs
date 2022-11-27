using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Model
{
    public class FileUpload : MinIOModel
    {
        public Guid ID { get; set; }
        public string FilePath { get; set; }
        public IFormFile FileRaw { get; set; }
        public long FileSize { get; set; }
        public bool Status { get; set; }
    }
    public class FileAction : FileUpload
    {
        public enum FileActionControl
        {
            Move = 0x1,
            Delete = 0x2,
            Transfer = 0x3,
            BackUp = 0x4,
            BackUpDelete = 0x5,

        }
        public string LogbackUp { get; set; } = string.Format(DateTime.Now.ToString(), ".txt");
    }


}
