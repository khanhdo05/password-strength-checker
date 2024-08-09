using Microsoft.AspNetCore.Mvc;
using Checker.Model;
namespace Checker.Web;

[ApiController]
[Route("controller")]
public class CheckerController : ControllerBase
{
    public record IncomingPasswordCheckRequest
    {
        public string Password { get; set; } = "";
        public bool IsAdmin { get; set; }
    }
    
    public record UpdatedStateResponse
    {
        public bool IsStrong { get; set; }
    }

    [HttpPost("check")]
    public IActionResult PasswordStrengthChecker([FromBody] IncomingPasswordCheckRequest req)
    {
        var obj = new StrengthChecker(req.Password, req.IsAdmin);
        return Ok(new UpdatedStateResponse
        {
            IsStrong = obj.IsStrong()
        });
    }
}
