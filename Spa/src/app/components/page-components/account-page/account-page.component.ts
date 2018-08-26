import { Component, OnInit } from '@angular/core';
import {HttpHelper} from './../../../services/http-helper.service';
import { LocalStorageService } from './../../../services/local-storage.service';
import { CONFIG} from './../../../app.config' ;
import { Jsonp } from '@angular/http/src/http';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  constructor( private httphelper: HttpHelper, private localStorageSerive: LocalStorageService) { }

  ngOnInit() {
  }
  getToken() {
   this.httphelper.Get(CONFIG.Services.AuthApi.BaseUrl + CONFIG.Services.AuthApi.GetAuthToken).subscribe(res => {
    console.log(res);
    this.localStorageSerive.authToken = res.text();
   });
  }
  getData() {
    this.httphelper.GetAuthorize(CONFIG.Services.WordsApi.BaseUrl + CONFIG.Services.WordsApi.TestData).subscribe(res => {
      console.log(res);
    });
    this.httphelper.Get(CONFIG.Services.WordsApi.BaseUrl + CONFIG.Services.WordsApi.GetWordJson, {'word': 'black'}).subscribe(res => {
      console.log(JSON.parse(res.text()) );
    });
  }
}
