using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Google.Apis.Auth.OAuth2;
using System.IO;
using System.Threading;
using Google.Apis.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Google.Apis.YouTube.v3;
using Google.Apis.YouTube.v3.Data;

namespace AuthAPI.Controllers
{
    
    [Route("api/[controller]/[action]")]
    public class AuthController : Controller
    {     

#region actions  
        
        [HttpGet]
        public async Task<string> Google()
        {
            UserCredential credential = await GoogleWebAuthorizationBroker.AuthorizeAsync(
					new ClientSecrets{ClientId = "863315472625-892gs2lqq92v3ehmmb2t4vugictbdbbc.apps.googleusercontent.com",ClientSecret="YOGZRVQb3ju8qBWurkHDpEtL"},
					new[] {"openid", "email"}, "user", CancellationToken.None);
            
            if(credential!=null)
            {
                
                var oauthSerivce =
                    new Google.Apis.Oauth2.v2.Oauth2Service(new BaseClientService.Initializer {HttpClientInitializer = credential});
                var UserInfo = await oauthSerivce.Userinfo.Get().ExecuteAsync();
                Console.WriteLine(UserInfo.Email+"qweqwe");
                return getToken(getClaims(UserInfo.Email,"user"));
            }
            else
            {
                Console.WriteLine("null credential");    
            }
            return "";
        }
        
        
#endregion

#region private

        private ClaimsIdentity getClaims(string userEmail,string userType="user")
        {
            var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, userEmail),
                    new Claim(ClaimsIdentity.DefaultRoleClaimType, userType)
                };
                ClaimsIdentity claimsIdentity =
                new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                    ClaimsIdentity.DefaultRoleClaimType);

            return claimsIdentity;            
        }
        private string getToken(ClaimsIdentity claims)
        {
            var jwt = new JwtSecurityToken(
                issuer: AuthOptions.ISSUER,
                audience: AuthOptions.AUDIENCE,
                notBefore: DateTime.UtcNow,
                claims: claims.Claims,
                expires: DateTime.UtcNow.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
            return new JwtSecurityTokenHandler().WriteToken(jwt); 
        }        
#endregion


    }
}
