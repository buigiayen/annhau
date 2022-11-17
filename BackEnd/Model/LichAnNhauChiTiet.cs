using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Model
{
    public class LichAnNhauChiTiet
    {
        public int ID { get; set; }
        public int IDLich { get; set; }
        public int ThanhVienThamGia { get; set; }
        public DateTime NgayThamGia { get; set; }
    }
}
