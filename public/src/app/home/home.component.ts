import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';
import { CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _http: HttpService,
    private _router: Router,
    private _cookie: CookieService) {
      this._http.verifySession()
     }

  ngOnInit() {


  }

  logout(){
    this._http.delSessionService()
  }



}
