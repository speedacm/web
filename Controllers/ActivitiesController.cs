using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SpeedACM.Web.Models;
using SpeedACM.Web.Services;

namespace SpeedACM.Web.Controllers
{
	[Route("api/[controller]")]
	public class ActivitiesController : Controller
	{
		// TODO: should probably be in config
		const string Folder = "Activities";

		IAcmDirectory<Activity> Directory { get; }

		public ActivitiesController (IFileDataService files) => Directory = files.GetDirectory<Activity>(Folder);

		[HttpGet("all")]
		public IActionResult AllActivities ()
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

		[HttpGet("name/{name}")]
		public IActionResult ActivityByName (string name)
		{
			try
			{
				return Ok(Directory.GetFile(name).GetModel());
			}
			catch (FileNotFoundException)
			{
				return NotFound();
			}
			catch (Exception)
			{
				return StatusCode(500);
			}
		}

	}

}