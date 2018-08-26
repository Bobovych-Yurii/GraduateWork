using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;
using WordsAPI.Models; 
using WordsAPI.Middleware;


namespace WordsAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    public class WordsController : Controller
    {

        private IWordsApiMiddleware _wordApi;
        private IMongodbWordsMiddleware _mongoDb;
        public WordsController(IWordsApiMiddleware wordsApi,IMongodbWordsMiddleware mongodb)
        {
            _wordApi = wordsApi;
            _mongoDb = mongodb;
        }

        [Authorize]
        [HttpGet]
        public string Test()
        {
            return "test";
        }
        [HttpGet]
        public async Task<string> GetWordData([FromQuery] string word)
        {
            Console.WriteLine();
            ApiWordModel wordObj = _mongoDb.GetWord(word);
            if(wordObj == null)
            {
                wordObj = (await _wordApi.GetWordObj(word)) as ApiWordModel;
                _mongoDb.SaveWord(wordObj);
                Console.WriteLine("get from API");
            }
            else
            {
                Console.WriteLine("get from mongo");
            }
            
            return wordObj.ToJson();
        }
       
    }
}
