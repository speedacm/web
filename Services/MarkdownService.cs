using Markdig;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpeedACM.Web.Services
{
	public interface IMarkdownService
	{
		string ToHtml (string markdown);
	}

	public class MarkdownService : IMarkdownService
	{
		public string ToHtml (string markdown) => Markdown.ToHtml(markdown);
	}

	public static class MarkdownServiceProvider
	{
		public static IServiceCollection AddMarkdownParser (this IServiceCollection services)
			=> services.AddSingleton<IMarkdownService, MarkdownService>();
	}
}
