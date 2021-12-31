using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dopami.Controllers {
    public class IndexController : Controller {
        
        public string Index() {
            return "Test";
        }

        public string Other() {
            return "Other text";
        }
    }
}
