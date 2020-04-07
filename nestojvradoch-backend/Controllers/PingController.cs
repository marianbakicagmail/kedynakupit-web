using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class PingController
{
    [HttpGet]
    public ActionResult<string> Get()
    {
        return "Hi from backend";
    }
}