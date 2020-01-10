using System;

namespace SpeedACM.Web.Models
{
	public class MeetingNotes : IModel
	{
		public string FileName { get; set; }
		public string HtmlContent { get; set; }
		public DateTime? Date { get; set; }

		public MeetingNotes () { }
	}
}
