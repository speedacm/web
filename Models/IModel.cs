namespace SpeedACM.Web.Models
{
	public interface IModel
	{
		string FileName { get; set; }
		string HtmlContent { get; set; }
	}
}