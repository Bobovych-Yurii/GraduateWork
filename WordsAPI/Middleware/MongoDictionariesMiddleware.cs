using System;
using System.Collections.Generic;
using WordsAPI.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization;
using WordsAPI.Middleware;
using System.Linq;


namespace WordsAPI.Middleware 
{
    class MongodbDictionaryMiddleware:IMongodbDictionaryMiddleware
    {
        MongoClient client;
        IMongoDatabase database;
        IMongoCollection<DictionaryModel> collection;        
        public MongodbDictionaryMiddleware()
        {
            string connectionString = "mongodb://localhost:27017";
			client = new MongoClient(connectionString);
			database = client.GetDatabase("wordsApiDB");
            collection = database.GetCollection<DictionaryModel>("dictionaries");
           
        }


        public void CopyDictionary(string userId,string dictionaryId)
        {

        }
        public List<string> GetDictionariesList(string userId)
        {
            var filter = Builders<DictionaryModel>.Filter.Eq("UserId", userId);
            List<DictionaryModel> dictionary = collection.Find(filter).ToList();
            List<string> dictList = dictionary.Select(d => d.DictionayName).ToList();
            return dictList;
        }
        public void CreateDictionary(string userId,string dictionaryName) 
        {
            var dictionary = new DictionaryModel();
            dictionary.DictionayName = dictionaryName;
            dictionary.UserId = userId;
            dictionary.CreatorId = userId;
            dictionary.LastUpdate = DateTime.UtcNow;
            
            try{
                collection.InsertOne(dictionary);
            }
            catch { }
        }
        public DictionaryModel GetDictionaryData(string userId, string dictionaryName) 
        {
            var filter = Builders<DictionaryModel>.Filter.Eq("_id", userId+dictionaryName);
            DictionaryModel dictionary = collection.Find(filter).FirstOrDefault();
            
            return dictionary;
        }
        public void AddWordToDictionary(string userId, string dictionaryName,WordModel wordModel)
        {            
            var filter = Builders<DictionaryModel>.Filter.Eq("_id", userId+dictionaryName);
            var dictionary = collection.Find(filter).FirstOrDefault(); 
            WordModel wordInDict = null;
            
            if(dictionary.Words == null)
                dictionary.Words = new List<WordModel>();
            else            
                wordInDict = dictionary.Words?.Find(word => word.Word == wordModel.Word);
           
            
            if(wordInDict == null){
                dictionary.Words.Add(wordModel);
                dictionary.LastUpdate = DateTime.UtcNow;
            }
            collection.ReplaceOne(filter,dictionary);

        }
        public void RemoveWordFromDictionary(string userId, string dictionaryName,WordModel word)
        {
            var filter = Builders<DictionaryModel>.Filter.Eq("_id", userId+dictionaryName);
            var dictionary = collection.Find(filter).FirstOrDefault();
            Console.WriteLine(dictionary.Words.Count);
            var delWord = dictionary.Words.Where(w => w.Word == word.Word).FirstOrDefault();
            dictionary.Words.Remove(delWord);            
            Console.WriteLine(dictionary.Words.Count);
            dictionary.LastUpdate = DateTime.UtcNow;
            collection.ReplaceOne(filter,dictionary);
        }
        public void RemoveDictionary(string userId, string dictionaryName)
        {
            var filter = Builders<DictionaryModel>.Filter.Eq("_id", userId+dictionaryName);
            collection.DeleteOne(filter);
        }
        
    }
}