using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization;

namespace WordsAPI.Models 
{
    public class DictionaryModel 
    {
        [BsonId]
        public string DictionaryId 
        {
            get 
            {
                if(UserId != "" && DictionayName != "")
                    return UserId+DictionayName;
                else return "";
            }
        }
        public string UserId; // belong user email
        public string DictionayName;
        public List<WordModel> Words;
        public string CreatorId; // creator email
        public DateTime LastUpdate;
        
        public DictionaryModel(){}
        public DictionaryModel(string userEmail, string dictionayName, List<WordModel> words)
        {            
            UserId = userEmail;
            DictionayName = dictionayName;
            Words = words;
            LastUpdate = DateTime.UtcNow;
        }
        public DictionaryModel(string json)
        {
            
        } 
    }
}