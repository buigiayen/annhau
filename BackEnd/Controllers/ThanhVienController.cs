using BackEnd.interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [Route("v1/Person")]
    [ApiController]
    public class ThanhVienController : ControllerBase
    {
        IThanhVien _IThanhVien { get; set; }

        public ThanhVienController(IThanhVien IThanhVien)
        {
            _IThanhVien = IThanhVien;
        }

        [HttpGet("ThanhVien")]
        public async Task<IActionResult> DanhSachThanhVien([FromQuery]Model.ThanhVien thanhVien)
        {
            var data = await _IThanhVien.GetThanHVien(thanhVien);
            return Ok(data);
        }
        [HttpPost("ThanhVien")]
        public async Task<IActionResult> ThemThanhVien([FromBody] Model.ThanhVien thanhVien)
        {
            var data = await _IThanhVien.TaoMoiThanhVien(thanhVien);
            return Ok(data);
        }
        [HttpPut("ThanhVien")]
        public async Task<IActionResult> SuaThanhVien([FromBody] Model.ThanhVien thanhVien)
        {
            var data = await _IThanhVien.SuaThanhVien(thanhVien);
            return Ok(data);
        }
        [HttpDelete("ThanhVien")]
        public async Task<IActionResult> XoaThanhVien([FromBody] Model.ThanhVien thanhVien)
        {
            var data = await _IThanhVien.XoaThanhVien(thanhVien);
            return Ok(data);
        }
    }
}
