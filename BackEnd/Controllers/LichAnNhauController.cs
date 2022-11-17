using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [Route("v1/LichAnNhau")]
    [ApiController]
    public class LichAnNhauController : ControllerBase
    {
        [HttpGet("Lich")]
        public async Task<IActionResult> ThongTinLichAnNhau()
        {
            return Ok();
        }
        [HttpPost("Lich")]
        public async Task<IActionResult> ThemLichAnNhau()
        {
            return Ok();
        }
        [HttpPut("Lich")]
        public async Task<IActionResult> SuaLichAnNhau()
        {
            return Ok();
        }
        [HttpDelete("Lich")]
        public async Task<IActionResult> XoaLichAnNhau()
        {
            return Ok();
        }
    }
}
