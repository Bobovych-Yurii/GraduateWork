using WordsAPI.Models;
using System.Collections.Generic;

namespace WordsAPI.Middleware 
{
    public interface IMongodbWordsMiddleware
    {
        ApiWordModel GetWord(string word);
        void SaveWord(ApiWordModel word);
        List<ApiWordModel> GetWords(string[] words);
        void SaveWords(List<ApiWordModel> words);
    }
}
