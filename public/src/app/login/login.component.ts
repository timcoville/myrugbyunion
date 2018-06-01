import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;

  constructor(private _http: HttpService, private _router: Router) { }

  ngOnInit() {
    this.user = {
      email: '',
      password: ''
    }
  }

  login(){

    this._http.loginService(this.user)
      .subscribe(data=>{
        console.log(data)
        this._http.setSessionService(data['_id'])
        return this._router.navigate(['home'])
      })
    this.user = {
      email: '',
      password: ''
    }
  }

}
