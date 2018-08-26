import { Component, OnInit , Input} from '@angular/core';
import { LocalStorageService} from './../../services/local-storage.service';
import { HttpHelper} from './../../services/http-helper.service';
import { CONFIG} from './../../app.config';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {
@Input() buttonClass: string;

  constructor(private localStorageService: LocalStorageService,
              private httphelper: HttpHelper) { }
  LogIn() {
    this.httphelper.Get(CONFIG.Services.AuthApi.BaseUrl + CONFIG.Services.AuthApi.GetAuthToken).subscribe(res => {
      this.localStorageService.authToken = res.text();
      alert(this.buttonClass);
      location.reload();
    });
  }

  LogOut() {
    this.localStorageService.authTokenClean();
    location.reload();
  }

}
