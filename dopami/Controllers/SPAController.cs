using Microsoft.AspNetCore.Mvc;


namespace dopami.Controllers {
    public class SPAController : Controller { // SPAController is a temporary solution here
        private readonly IWebHostEnvironment hostingEnvironment;

        public SPAController(IWebHostEnvironment host) {
            hostingEnvironment = host;
        }

        // [Route("{*any}")]
        [Route("")]
        [Route("index/")]
        public IActionResult Index() {
            return Content(
                System.IO.File.ReadAllText(Path.Combine(hostingEnvironment.ContentRootPath, "Client/dist/index.html")),
                "text/html"
            );
        }

        [Route("app/{*any}")]
        public IActionResult App() {
            return Content(
                System.IO.File.ReadAllText(Path.Combine(hostingEnvironment.ContentRootPath, "Client/dist/app.html")),
                "text/html"
            );
        }
    }
}
