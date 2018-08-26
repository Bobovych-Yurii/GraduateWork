import { Injectable } from '@angular/core';
import { HttpHelper} from './../services/http-helper.service';
import { ApiWordModel } from './../models/ApiWord';
import { CONFIG } from './../app.config';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WordsProviderService {

  constructor( private httpHelper: HttpHelper) { }

  GetWordData(wordText: string): Observable<Array<ApiWordModel>> {
      return this.httpHelper.Get(CONFIG.Services.WordsApi.BaseUrl + CONFIG.Services.WordsApi.GetWordJson, {'word': wordText}).map(res => {
      console.log(JSON.parse(res.text()));
      const response = JSON.parse(res.text());
      const words = new Array<ApiWordModel>();

      for (const resultsItem of response['Results'])
      {
        const word = new ApiWordModel();
        word.Word = response['Word'];

        if (resultsItem['Examples']) {
          word.Example = (resultsItem['Examples'])[0];
        } else {word.Example = ''; }

        word.Definition = resultsItem['Definition'] ? resultsItem['Definition'] : '';
        words.push(word);
      }
      return words;

    });
  }
}
