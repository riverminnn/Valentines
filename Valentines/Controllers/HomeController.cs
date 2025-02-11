using Microsoft.AspNetCore.Mvc;

namespace Valentines.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
