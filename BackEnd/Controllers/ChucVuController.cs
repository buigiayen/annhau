using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [Route("api/ChucVus")]
    [ApiController]
    public class ChucVuController : ControllerBase
    {

        [HttpGet("ChucVu")]
        public async Task<IActionResult> TaoMoi()
        {
            return Ok();
        }
        [HttpPost("ChucVu")]
        public async Task<IActionResult> ThemMoiChucVu()
        {
            return Ok();
        }
        [HttpPut("ChucVu")]
        public async Task<IActionResult> SuaChucVu()
        {
            return Ok();
        }
        [HttpDelete("ChucVu")]
        public async Task<IActionResult> XoaChucVu()
        {
            return Ok();
        }
    }
}
