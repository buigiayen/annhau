using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Model
{
    public class LichAnNhau
    {
        public int ID { get; set; }
        public string NoiDungAnNhau { get; set; }
        public DateTime NgayAnNhau { get; set; }
        public int  IDThanHVien { get; set; }
        public double SoTienThanhToan { get; set; }
    }
}
