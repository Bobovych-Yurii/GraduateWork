using System.Threading.Tasks;

namespace WordsAPI.Middleware 
{
    public interface IWordsApiMiddleware
    {
        Task<object> GetWordObj(string word);
        Task<string> GetWordJson(string word);
    }
}