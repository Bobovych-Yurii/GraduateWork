using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace AuthAPI
{
    public class AuthOptions
    {
         public const string ISSUER = "GraduateWork.AuthAPI"; // издатель токена
        public const string AUDIENCE = "http://localhost"; // потребитель токена
        const string KEY = "mysupersecret_secretkey!123";   // ключ для шифрации
        public const int LIFETIME = 30; // время жизни токена - 1 минута
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }   
    }    
} 