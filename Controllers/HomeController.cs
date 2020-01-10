using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SpeedACM.Web.Controllers
{
	[Route("api/[controller]")]
    public class HomeController : Controller
    {
        //[HttpGet("[action]")]
        //TODO: halp

		[HttpGet("logo")]
		public IActionResult AcmLogo ()
		{
			// TODO: Logo
			return StatusCode(500);
		}

		[HttpGet("orginfo")]
        public IActionResult OrgInfo ()
		{
			// TODO: org info
			return Ok("TODO: org info lol");
		}

    }
}