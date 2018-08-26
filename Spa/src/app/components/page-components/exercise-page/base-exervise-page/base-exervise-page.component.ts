import { Component, OnInit } from '@angular/core';
import { DictionaryProviderService } from './../../../../providers/dictionary.provider.service';
import { ActivatedRoute } from '@angular/router';
import { ApiWordModel } from './../../../../models/ApiWord';
import { element } from 'protractor';
@Component({
  selector: 'app-base-exervise-page',
  templateUrl: './base-exervise-page.component.html',
  styleUrls: ['./base-exervise-page.component.css']
})
export class BaseExervisePageComponent implements OnInit {

  private dictionaryName: string;
  private WordAnswered = 0;
  private CorrectAnser = 0;
  private Status: Array<{Correct: boolean, Clicked: boolean}>;
  constructor(private dictProvider: DictionaryProviderService, private route: ActivatedRoute) {
  }

  Answer(word: string, wordIndex: number) {
    this.WordAnswered++;
    console.log(word + '  ' + wordIndex );
    if ( this.dictProvider.DictionaryContainer[this.dictionaryName][wordIndex].Word === word) {
      this.Status[wordIndex].Correct = true;
      this.CorrectAnser++;
    }
    if ( this.WordAnswered === this.dictProvider.DictionaryContainer[this.dictionaryName].length) {
      this.TestComplete();
    }
   this.Status[wordIndex].Clicked = true;

  }
  TestComplete() {
    console.log(' test done done');
  }
   ngOnInit() {
    this.route.params.subscribe(res => {
      this.dictionaryName = res['id'];
      this.Status = new Array(this.dictProvider.DictionaryContainer[this.dictionaryName].length)
        .fill({Correct: false, Clicked: false});
    });

  }
}
