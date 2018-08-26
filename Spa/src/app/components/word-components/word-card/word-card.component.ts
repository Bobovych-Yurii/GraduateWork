import { Component, OnInit, Input } from '@angular/core';
import { ApiWordModel } from './../../../models/ApiWord';
import { DictionaryProviderService} from './../../../providers/dictionary.provider.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.css']
})
export class WordCardComponent implements OnInit {

  @Input('word') word: ApiWordModel;
  @Input('searchComp')searchComp = false;
  private matMenuHiden = false;
  constructor(private dictProvider: DictionaryProviderService, private route: ActivatedRoute) { }

  Delete() {
    this.route.params.subscribe(res => {
      const dictionaryName = res['id'];
      this.dictProvider.DeleteWord(this.word, dictionaryName);
    });
  }
  AddToDictionary(dictionaryName: string) {
    this.dictProvider.AddWord(this.word, dictionaryName);
  }
  ngOnInit() {
  }

}
