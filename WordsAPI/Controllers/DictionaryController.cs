using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;
using WordsAPI.Models; 
using WordsAPI.Middleware;
using System.Security.Claims;

namespace WordsAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    public class DictionaryController : Controller
    {
        
        private IMongodbDictionaryMiddleware _mongoDict;
        public DictionaryController(IMongodbDictionaryMiddleware mognoDict)
        {
            _mongoDict = mognoDict;
        }
        
        [Authorize]
        [HttpGet]
        public List<string> GetDictionariesList()
        {
            return _mongoDict.GetDictionariesList(GetUserId()); 
        }

        [Authorize]
        [HttpGet]
        public DictionaryModel GetDictionaryData([FromQuery]string dictionaryName)
        {            
            var dictModel = _mongoDict.GetDictionaryData(GetUserId(),dictionaryName);           
            return dictModel;
        }

        [Authorize]
        [HttpPost]
        public ActionResult CreateDictionary([FromBody]DictNameSchema DNShema)
        {            
            _mongoDict.CreateDictionary(GetUserId(), DNShema.dictionaryName);
            return new OkResult();
        }

        [Authorize]
        [HttpPost]
        public ActionResult RemoveDictionary([FromBody]DictNameSchema DNShema)
        {
            _mongoDict.RemoveDictionary(GetUserId(),DNShema.dictionaryName);
            return new OkResult();
        }

        [Authorize]
        [HttpPost]
        public ActionResult AddWord([FromBody]DictNameWordSchema schema)
        {
            _mongoDict.AddWordToDictionary(GetUserId(),schema.DictionaryName,schema.word);
             return new OkResult();
        }

        [Authorize]
        [HttpPost]
        public ActionResult RemoveWord([FromBody]DictNameWordSchema schema) 
        {
            Console.WriteLine(schema.DictionaryName + schema.word.Word);
            _mongoDict.RemoveWordFromDictionary(GetUserId(),schema.DictionaryName,schema.word);
            return new OkResult();
        }

#region  private
        private string GetUserId()
		{
			string id = (from c in User.Claims
						 where c.Type == ClaimsIdentity.DefaultNameClaimType
						 select c.Value).Single();
			return id;
		}
#endregion

#region  Schemas
        public class DictNameSchema
        {
            public string dictionaryName;
        }
        public class DictNameWordSchema
        {
            public string DictionaryName;
            public WordModel word;
        }
#endregion
        
        
    }
}