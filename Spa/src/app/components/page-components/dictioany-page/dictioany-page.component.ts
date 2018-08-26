import { Component, OnInit } from '@angular/core';
import { IndexdbService } from './../../../services/indexdb.service';
import { DictionaryProviderService } from './../../../providers//dictionary.provider.service';

@Component({
  selector: 'app-dictioany-page',
  templateUrl: './dictioany-page.component.html',
  styleUrls: ['./dictioany-page.component.css']
})
export class DictioanyPageComponent implements OnInit {

  constructor( private indexDb: IndexdbService, private dictProvider: DictionaryProviderService) {

  }

  //     dict
  AddDict(dictName: string) {
    this.dictProvider.CreateDictionary(dictName);
  }

  //    dict
  ngOnInit() {
   // this.indexDb.Do();
  }

}
