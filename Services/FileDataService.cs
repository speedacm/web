using Microsoft.Extensions.DependencyInjection;
using SpeedACM.Web.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace SpeedACM.Web.Services
{

	public interface IFileDataService
	{
		IAcmDirectory<T> GetDirectory<T> (string folder) where T : IModel;
		Uri Root { get; }
	}

	public interface IAcmDirectory<T> where T : IModel
	{
		IEnumerable<string> IndexFiles ();
		IAcmFile<T> GetFile (string name);
		IEnumerable<IAcmFile<T>> EnumerateFiles ();
	}

	public interface IAcmFile<T> where T : IModel
	{
		T GetModel ();
	}

	public class FileDataService : IFileDataService
	{
		// TODO: probably better to use config for this, but also it would be better to use a database in future work ¯\_(ツ)_/¯
		public Uri Root { get; } = new Uri(Directory.GetCurrentDirectory() + "/Content");

		IMarkdownService MarkdownParser { get; }

		public FileDataService (IMarkdownService markdown) => MarkdownParser = markdown;

		public IAcmDirectory<T> GetDirectory<T> (string folder) where T : IModel => new AcmDirectory<T>(MarkdownParser, Root, folder);
	}

	public class AcmDirectory<T> : IAcmDirectory<T> where T : IModel
	{
		public Uri Root { get; }
		public string Directory { get; }
		IMarkdownService MarkdownParser { get; }

		public AcmDirectory (IMarkdownService markdown, Uri root, string directory)
		{
			Root = root;
			Directory = directory;
			MarkdownParser = markdown;
		}

		public IEnumerable<string> IndexFiles () => new DirectoryInfo($"{Root.LocalPath}/{Directory}").GetFiles().Select(f => RemoveExtension(f.Name));
		public IAcmFile<T> GetFile (string name) => new AcmFile<T>(MarkdownParser, $"{Root.LocalPath}/{Directory}/{name}.acm", name);
		public IEnumerable<IAcmFile<T>> EnumerateFiles () => IndexFiles().Select(name => GetFile(name));

		public override int GetHashCode () => Directory.GetHashCode();
		public override bool Equals (object obj) => obj is AcmDirectory<T> a ? Directory.Equals(a.Directory) : false;

		static string RemoveExtension (string name) => name.Remove(name.LastIndexOf('.'));
	}

	public class AcmFile<T> : IAcmFile<T> where T : IModel
	{
		string FileText => _fileText ?? (_fileText = File.ReadAllText(_path));
		string _fileText;
		readonly string _path;
		readonly string _name;

		IMarkdownService MarkdownParser { get; }


		public AcmFile (IMarkdownService markdown, string path, string name)
		{
			MarkdownParser = markdown;
			_path = path;
			_name = name;
		}

		public T GetModel ()
		{
			int startIndex = FileText.IndexOf('{');
			int endIndex;
			int braceCount = 1;

			for (endIndex = startIndex + 1; braceCount > 0; endIndex++)
			{
				if (FileText[endIndex] == '{')
				{
					braceCount++;
				}
				else if (FileText[endIndex] == '}')
				{
					braceCount--;
				}
			}

			string meta = FileText.Substring(startIndex, endIndex - startIndex);

			var model = JsonSerializer.Deserialize<T>(meta);
			model.FileName = _name;
			model.HtmlContent = MarkdownParser.ToHtml(FileText.Substring(endIndex));

			return model;
		}
	}

	public static class FileDataServiceProvider
	{
		public static IServiceCollection AddFileDataService (this IServiceCollection services)
			=> services.AddSingleton<IFileDataService, FileDataService>();
	}
}
