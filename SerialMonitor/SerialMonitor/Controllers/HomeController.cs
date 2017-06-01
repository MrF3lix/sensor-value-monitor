using System.Web.Mvc;

namespace SerialMonitor.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult RecieveData(string jsonData)
        {
            //Do stuff
            return RedirectToAction("Index");
        }
    }
}