import { Component, OnInit } from '@angular/core';
import { WordsProviderService } from './../../../providers/words-provider.service';
import { ApiWordModel } from '../../../models/ApiWord';

@Component({
  selector: 'app-search-word',
  templateUrl: './search-word.component.html',
  styleUrls: ['./search-word.component.css']
})
export class SearchWordComponent implements OnInit {

  searchRes: Array<ApiWordModel>;
  hideList = true;
  constructor(private wordsProvider: WordsProviderService) { }

  ngOnInit() {
  }

  Close() {
  this.hideList = true;
  }

  GetWordData(word: string) {
    this.wordsProvider.GetWordData(word).subscribe(res => {
      this.searchRes = res;
      this.hideList = false; });
  }
}
