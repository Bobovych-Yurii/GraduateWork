using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization;

namespace WordsAPI.Models
{
	public class ApiWordModel
	{
		[BsonId]
		public string Word { get; set; }
		[JsonProperty(PropertyName="Results")]
		public List<WordData> WordData { get; set; }
		
		public ApiWordModel(){}
		public ApiWordModel(string json)
		{
			ApiWordModel word = JsonConvert.DeserializeObject<ApiWordModel>(json);
			this.Word = word.Word;	
			Console.WriteLine(this.Word);	
			Console.WriteLine(json);
			var tempWordData = 	word.WordData.Where(res => res.Examples!=null).ToList();
			if(tempWordData.Count!=0)
			{
				this.WordData = tempWordData;
			}
			else
			{
				this.WordData = word.WordData.Count > 4 ? word.WordData.GetRange(0,4): word.WordData.ToList();
			}
			 
		}
		public string ToJson()
		{
			return JsonConvert.SerializeObject(this);
		}

		public override string ToString()
		{
			return "Word: " + Word + "\n Definition: " + WordData.FirstOrDefault().Definition + "\n Example: " + WordData.FirstOrDefault().Examples.FirstOrDefault();
		}
		
	}

	public class WordData
	{
		public string Definition { get; set; }
		public string partOfSpeech { get; set; }
		public List<string> Synonyms { get; set; }
		public List<string> TypeOf { get; set; }
		public List<string> HasTypes { get; set; }
		public List<string> Derivation { get; set; }
		public List<string> Examples { get; set; }
	}
	
}
