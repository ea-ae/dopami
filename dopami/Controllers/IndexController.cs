using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace dopami.Controllers {
    public class IndexController : Controller {
        [Route("api/")]
        [Route("api/index")]
        public string Index(string text = "default") {
            return HtmlEncoder.Default.Encode($"API Index, text={text}");
        }
        
        [Route("api/print/{text=default}")]
        public string Print(string text) {
            return HtmlEncoder.Default.Encode($"print:{text}");
        }
    }
}
