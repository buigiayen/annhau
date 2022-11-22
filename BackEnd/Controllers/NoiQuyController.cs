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
        private interfaces.INoiQui _noiQui { get; set; }
        public NoiQuyController(interfaces.INoiQui noiQui)
        {
            _noiQui = noiQui;
        }
        [HttpGet("NoiQui")]
        public async Task<IActionResult> ThongTinNoiQui([FromQuery]Model.NoiQui noiQui)
        {
            return Ok(await _noiQui.GetNoiQuiasync(noiQui));
        }
        [HttpPut("NoiQui")]
        public async Task<IActionResult> SuaNoiQui(Model.NoiQui noiQui)
        {
            return Ok(await _noiQui.UpdateNoiQuiasync(noiQui));
        }
      
    }
}
