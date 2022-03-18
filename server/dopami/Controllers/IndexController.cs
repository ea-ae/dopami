using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace dopami.Controllers {
    [Route("api/v1/")]
    public class IndexController : Controller {
        [Route("")]
        [Route("index/")]
        public string Index() {
            return HtmlEncoder.Default.Encode("API Index");
        }
        
        [Route("print/{text=default}")]
        public string Print(string text) {
            return HtmlEncoder.Default.Encode($"print:{text}");
        }
    }
}
