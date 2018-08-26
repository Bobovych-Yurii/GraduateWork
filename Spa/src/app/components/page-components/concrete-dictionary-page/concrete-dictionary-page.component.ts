import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DictionaryProviderService} from './../../../providers/dictionary.provider.service';
import {ApiWordModel} from './../../../models/ApiWord';


@Component({
  selector: 'app-concrete-dictionary-page',
  templateUrl: './concrete-dictionary-page.component.html',
  styleUrls: ['./concrete-dictionary-page.component.css']
})
export class ConcreteDictionaryPageComponent implements OnInit {

  dictionaryName: string;
  dictionatyData: Array<ApiWordModel>;
  constructor(private route: ActivatedRoute,
              private dictProvider: DictionaryProviderService) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.dictionaryName = res['id'];
      this.getDictionaryData();
    });
  }
  Delete() {
    this.dictProvider.DeleteDictionary(this.dictionaryName);
  }
  getDictionaryData() {
    console.log(this.dictProvider.DictionaryList.includes(this.dictionaryName));
    if (this.dictProvider.DictionaryList.includes(this.dictionaryName)) {
      this.dictProvider.GetDictionaryData(this.dictionaryName).subscribe(res => {
        this.dictionatyData = res;
      });
    }
  }
}
