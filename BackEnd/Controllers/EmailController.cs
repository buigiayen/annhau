using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [Route("v1/emails")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        public interfaces.IEmail _IEmail { get; set; }
        public EmailController(interfaces.IEmail IEmail)
        {
            _IEmail = IEmail;
        }

        [HttpPost("email")]
        public async Task<IActionResult> SendEmail(Model.Email email)
        {
            return Ok(await _IEmail.SendEmailasync(email));
        }
    }
}
