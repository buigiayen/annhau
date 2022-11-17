using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [Route("v1/NoiQuis")]
    [ApiController]
    public class NoiQuyController : ControllerBase
    {
        [HttpGet("NoiQui")]
        public async Task<IActionResult> ThongTinNoiQui()
        {
            return Ok();
        }
        [HttpPut("NoiQui")]
        public async Task<IActionResult> SuaNoiQui()
        {
            return Ok();
        }
      
    }
}
