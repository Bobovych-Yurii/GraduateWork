import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dictionary-card',
  templateUrl: './dictionary-card.component.html',
  styleUrls: ['./dictionary-card.component.css']
})
export class DictionaryCardComponent implements OnInit {
  @Input('DictionaryName') DictionaryName;
  constructor() { }
  ngOnInit() {
  }

}
