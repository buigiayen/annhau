using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [Route("v1/fileAction")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        public interfaces.IFileUpload _fileUpload { get; set; }
        public FilesController(interfaces.IFileUpload fileUpload)
        {
            _fileUpload = fileUpload;
        }
        [HttpPost("File")]
        public async Task<IActionResult> PostFileAsync([FromQuery] Model.FileUpload fileUpload)
        {
            return Ok(await _fileUpload.PostFilesync(fileUpload));
        }
        [HttpGet("File")]
        public async Task<IActionResult> GetFileAsync()
        {
            return Ok(await _fileUpload.GetAllBucketasync());
        }
    }
}
