import { Component, OnInit } from '@angular/core';
import { IndexdbService} from './../../../services/indexdb.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  constructor(private index: IndexdbService) {
   // this.index.Do();
   }

  ngOnInit() {
  }

}
