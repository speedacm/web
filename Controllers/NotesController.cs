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
    public class NotesController : Controller
    {
		// TODO: should probably be in config
		const string Folder = "MeetingNotes";

		IAcmDirectory<MeetingNotes> Directory { get; }

		public NotesController (IFileDataService files) => Directory = files.GetDirectory<MeetingNotes>(Folder);

        [HttpGet("all")]
        public IActionResult AllMeetingNotes()
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
		public IActionResult MeetingNotesByName (string name)
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