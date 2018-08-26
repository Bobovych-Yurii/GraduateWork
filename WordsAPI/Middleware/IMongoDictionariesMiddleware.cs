using WordsAPI.Models;
using System.Collections.Generic;

namespace WordsAPI.Middleware 
{
    public interface IMongodbDictionaryMiddleware
    {
        void CopyDictionary(string userId,string dictionaryId);
        void CreateDictionary(string userId,string dictionaryName);
        DictionaryModel GetDictionaryData(string userId, string dictionaryName);
        List<string> GetDictionariesList(string userId);
        void AddWordToDictionary(string userId, string dictionaryName,WordModel wordModel);
        void RemoveWordFromDictionary(string userId, string dictionaryName,WordModel word);
        void RemoveDictionary(string userId, string dictionaryName);
    }
}
