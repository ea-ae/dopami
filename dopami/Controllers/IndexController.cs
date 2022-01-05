using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace dopami.Controllers {
    public class IndexController : Controller {
        [Route("app/")]
        [Route("app/index")]
        public string Index(string text = "default") {
            return HtmlEncoder.Default.Encode($"API Index, text={text}");
        }
    }
}
