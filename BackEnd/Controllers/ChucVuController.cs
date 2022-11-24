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
        private interfaces.IChucVu _chucVu;
        public ChucVuController(interfaces.IChucVu chucVu)
        {
            _chucVu = chucVu;
        }
        [HttpGet("ChucVu")]
        public async Task<IActionResult> TaoMoi()
        {
            return Ok(await _chucVu.GetChucVuasync());
        }
        [HttpPost("ChucVu")]
        public async Task<IActionResult> ThemMoiChucVu(Model.NoiQui NoiQui)
        {
            return Ok(await _chucVu.POSTChucVuasync(NoiQui));
        }
        [HttpPut("ChucVu")]
        public async Task<IActionResult> SuaChucVu(Model.NoiQui NoiQui)
        {
            return Ok(await _chucVu.UpdateChucVuasync(NoiQui));
        }
        [HttpDelete("ChucVu")]
        public async Task<IActionResult> XoaChucVu(Model.NoiQui NoiQui)
        {
            return Ok(await _chucVu.DeleteChucVuasync(NoiQui));
        }
    }
}
