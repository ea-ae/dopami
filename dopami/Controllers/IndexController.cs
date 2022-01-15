using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace dopami.Controllers {
    public class IndexController : Controller {
        [Route("api/v1")]
        [Route("api/v1/index")]
        public string Index(string text = "default") {
            return HtmlEncoder.Default.Encode($"API Index, text={text}");
        }
        
        [Route("api/v1/print/{text=default}")]
        public string Print(string text) {
            return HtmlEncoder.Default.Encode($"print:{text}");
        }
    }
}
