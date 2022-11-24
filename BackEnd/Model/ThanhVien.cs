using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Model
{
    public class ThanhVien
    {
        public int? ID { get; set; }
        public string TenThanhVien { get; set; }
        public string NoiDungNgan { get; set; }
        public int IDChucVu { get; set; }
        public string Avatar { get; set; }
        public bool HienThi { get; set; }
        public string Email { get; set; }
    }
}
