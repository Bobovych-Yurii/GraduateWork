using System;
using System.Collections.Generic;
using WordsAPI.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization;
using WordsAPI.Middleware;

namespace WordsAPI.Middleware 
{
    class MongodbWordsMiddleware : IMongodbWordsMiddleware
    {
        MongoClient client;
        IMongoDatabase database;
        IMongoCollection<ApiWordModel> collection;        
        public MongodbWordsMiddleware()
        {
            string connectionString = "mongodb://localhost:27017";
			client = new MongoClient(connectionString);
			database = client.GetDatabase("wordsApiDB");
            collection = database.GetCollection<ApiWordModel>("words");
        }
        public ApiWordModel GetWord(string word)
        {
            var filter = Builders<ApiWordModel>.Filter.Eq("_id", word);            
            return collection.Find(filter).FirstOrDefault();
        }
        public void SaveWord(ApiWordModel word)
        {
            try{
                collection.InsertOne(word);
            }
            catch(MongoWriteException ex) {
                
            }   
            catch { }
        }
        public List<ApiWordModel> GetWords(string[] words)
        {
            List<ApiWordModel> wordsObj = new List<ApiWordModel>();
            foreach(var word in words)
            {
                var tempWord = GetWord(word);
                if(tempWord != null)
                    wordsObj.Add( GetWord(word) );
                else
                    return null;
            }
            return new List<ApiWordModel>();
        }
        public void SaveWords(List<ApiWordModel> words)
        {
                foreach(var word in words)
                {
                    SaveWord(word);                    
                }
        }
    }    
}