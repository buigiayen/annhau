using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Model
{
    public class FindData
    {
        public string? TextFind { get; set; }
        public DateTime? ToDate { get; set; } = DateTime.Now.AddDays(+1);
        public DateTime? FromDate { get; set; } = DateTime.Now.Date;
    }
}
