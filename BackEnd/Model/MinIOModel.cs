using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Model
{

    public class MinIOModel
    {
        public MinIOModel()
        {
            fileBucketMinios = new List<FileBucketMinio>();
        }
        public string bucket { get; set; }
        public List<FileBucketMinio> fileBucketMinios { get; set; }
    }
    public class FileBucketMinio
    {
        public Stream StreamFile { get; set; }
        public string FileName { get; set; }
        public string FilePath { get; set; }
        public double Size { get; set; }
    }

}
