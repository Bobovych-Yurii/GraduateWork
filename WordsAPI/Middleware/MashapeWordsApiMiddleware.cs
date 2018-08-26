using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;   
using System.Threading.Tasks;

using Microsoft.Extensions.Logging;
using WordsAPI.Models;


namespace WordsAPI.Middleware 
{
    public class MashapeWordsApiMiddleware:IWordsApiMiddleware
    {
            public async Task<object> GetWordObj(string word) 
            {
                return new ApiWordModel(await WordRequers(word));    
            }
            public async Task<string> GetWordJson(string word)
            {
                return new ApiWordModel(await WordRequers(word)).ToJson();
            }
			
			private async Task<string> WordRequers(string word)
			{
				WebResponse response = null;
			    HttpWebRequest request = (HttpWebRequest)WebRequest.Create($"https://wordsapiv1.p.mashape.com/words/{word}");
			    request.Headers["X-Mashape-Key"] = "y0gl4NyjTlmshwNGIm7O4HcHzdlCp1mBlpKjsndD8Yz653sWjK";
			    request.Headers["Accept"] = "application/json";
			    request.Credentials = CredentialCache.DefaultCredentials;

			    try
			    {
			    	response = await request.GetResponseAsync();
		    	}
			    catch  { return ""; }

		    	if (((HttpWebResponse)response).StatusCode == HttpStatusCode.OK)
		    	{
		    		Stream dataStream = response.GetResponseStream();
		    		StreamReader reader = new StreamReader(dataStream);		    		
		    		return reader.ReadToEnd();
		    	}
		    	return "";	
			}

    }
}
