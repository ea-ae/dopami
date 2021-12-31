using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dopami.Controllers {
    public class IndexController : Controller {
        
        public string Index(int id, string text = "default") {
            return HtmlEncoder.Default.Encode($"ID is {id}, text is {text}");
        }

        public IActionResult Other(string name) {
            ViewData["Name"] = name;
            return View();
        }
    }
}
