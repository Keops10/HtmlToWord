using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using webapi.Models;
using webapi.Services;

namespace webapi.Controllers
{
    [EnableCors("MyCorsPolicy")]
    [ApiController]
    [Route("api/[controller]")]
    public class HtmlToWordController : ControllerBase
    {
        private readonly IHtmlToWordService _service;

        public HtmlToWordController(IHtmlToWordService service)
        {
            _service = service;
        }

        [HttpPost("PostHtmlToWord")]
        public async Task<IActionResult> PostHtmlToWord(HtmlToWordModel model)
        {
            return File((await _service.CreateHtmlToWord(model)).ToArray(), "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
            //.pptx     application/vnd.openxmlformats-officedocument.presentationml.presentation
        }
    }
}
