using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [Route("v1/DanhSachAnNhau")]
    [ApiController]
    public class DanhSachAnNhauChiTietController : ControllerBase
    {
        [HttpGet("DanhSachAnNhauChiTiet")]
        public async Task<IActionResult> TaoMoi()
        {
            return Ok();
        }
        [HttpPost("DanhSachAnNhauChiTiet")]
        public async Task<IActionResult> ThemLichAnNhau()
        {
            return Ok();
        }
        [HttpPut("DanhSachAnNhauChiTiet")]
        public async Task<IActionResult> SuaLichAnNhau()
        {
            return Ok();
        }
        [HttpDelete("DanhSachAnNhauChiTiet")]
        public async Task<IActionResult> XoaLichAnNhau()
        {
            return Ok();
        }
    }
}
