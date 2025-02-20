using Microsoft.AspNetCore.Mvc;

namespace Nexora.Web.Controllers
{
    public class MessageController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult LeftContainer()
        {
            return PartialView("_LeftContainer");
        }

        public IActionResult RightContainer()
        {
            return PartialView("_RightContainer");
        }
    }
}
