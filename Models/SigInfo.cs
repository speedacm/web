using System;

namespace SpeedACM.Web.Models
{
	public class SigInfo : IModel
	{
		public string FileName { get; set; }
		public string HtmlContent { get; set; }
		public DateTime? MeetingTime { get; set; }

		public SigInfo () { }
	}
}
