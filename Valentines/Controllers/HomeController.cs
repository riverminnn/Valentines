using Microsoft.AspNetCore.Mvc;

namespace Valentines.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult HeheYes()
        {
            // Handle the logic for HeheYes action here
            ViewBag.Message = "Yay! Linhbeo said Yes!";
            return View();
        }
    }
}
