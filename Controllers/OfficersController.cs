using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SpeedACM.Web.Models;
using SpeedACM.Web.Services;

namespace SpeedACM.Web.Controllers
{
	[Route("api/[controller]")]
    public class OfficersController : Controller
    {
		// TODO: should probably be in config
		const string Folder = "Officers";

		IAcmDirectory<Officer> Directory { get; }

		public OfficersController (IFileDataService files) => Directory = files.GetDirectory<Officer>(Folder);

        [HttpGet("all")]
        public IActionResult AllOfficers()
        {
			try
			{
				return Ok(Directory.EnumerateFiles().Select(f => f.GetModel()).ToList());
			}
			catch (Exception)
			{
				return StatusCode(500);
			}
		}
	}
}