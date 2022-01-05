using Microsoft.AspNetCore.Mvc;

namespace dopami.Controllers {
    public class SPAController : Controller {
        [Route("{*any}")]
        public string Index(string text = "default") {
            return "spa_index";
        }

        [Route("app/{*any}")]
        public string App() {
            return "spa_app";
        }
    }
}
