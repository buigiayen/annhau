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
        private interfaces.ILichAnNhau _LichAnNhau { get; set; }
        public LichAnNhauController(interfaces.ILichAnNhau LichAnNhau)
        {
            _LichAnNhau = LichAnNhau;
        }
        [HttpGet("Lich")]
        public async Task<IActionResult> ThongTinLichAnNhau([FromQuery]Model.LichAnNhau lichAnNhau)
        {
            return Ok(await _LichAnNhau.GetLichAnNhauasync(lichAnNhau));
        }
        [HttpPost("Lich")]
        public async Task<IActionResult> ThemLichAnNhau(Model.LichAnNhau lichAnNhau)
        {
            return Ok(await _LichAnNhau.PostLichAnNhauasync(lichAnNhau));
        }
        [HttpPut("Lich")]
        public async Task<IActionResult> SuaLichAnNhau(Model.LichAnNhau lichAnNhau)
        {
            return Ok(await _LichAnNhau.PutLichAnNhauasync(lichAnNhau));
        }
        [HttpDelete("Lich")]
        public async Task<IActionResult> XoaLichAnNhau(Model.LichAnNhau lichAnNhau)
        {
            return Ok(await _LichAnNhau.DeleteLichAnNhauasync(lichAnNhau));
        }
    }
}
