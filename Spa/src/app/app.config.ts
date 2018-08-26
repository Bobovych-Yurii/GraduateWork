export const CONFIG = {
    Services: {
    AuthApi : {
        BaseUrl: 'http://localhost:5051/',
        GetAuthToken: 'api/auth/google/',
        TestData: 'api/auth/gettestdata'
        },
    WordsApi : {
        BaseUrl: 'http://localhost:5052/',
        TestData: 'api/words/test/',
        GetWordJson: 'api/words/GetWordData',
        CreateDict: 'api/dictionary/createDictionary',
        RemoveDict: 'api/dictionary/RemoveDictionary',
        AddWord: 'api/dictionary/AddWord',
        RemoveWord: 'api/dictionary/RemoveWord',
        GetDictionaryData: 'api/dictionary/GetDictionaryData',
        GetDictionariesList: 'api/dictionary/GetDictionariesList'
        }
    }
};

