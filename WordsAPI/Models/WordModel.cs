using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization;
namespace WordsAPI.Models
{
    public class WordModel
    {
        [BsonId]
        public string Word;
        public string Definition;
        public string Example;

        public WordModel(){}
        public WordModel(string word,string definition,string example)
        {
            Word = word;
            Definition = definition;
            Example = example;
            
        } 
    
    }
}