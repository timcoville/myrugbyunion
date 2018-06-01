import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any
  constructor(private _http: HttpService, private _router: Router) {      this._http.verifySession() }
  authority: any
  ngOnInit() {
    this.authority = 0
    this.user = {
      firstName: '',
      lastName: '',
      position: '',
      height: {
        feet: '',
        inches: ''
      },
      weight: '',
      dob: Date
    }
    this.getUser()
  }
  getUser(){
    this._http.getUserService()
      .subscribe(data=>{
        this.user.firstName = data['firstName']
        this.user.lastName = data['lastName']
        this.user.position = data['position']
        this.user.height.feet = data['height']['feet']
        this.user.height.inches = data['height']['inches']
        this.user.weight = data['weight']
        this.authority = data['authority']
        console.log("AUTHORITY", this.authority)
        
        var d = new Date(data['dob']),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate()+1),
        year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        this.user.dob = [year, month, day].join('-')
        
        
    /*     var date = new Date(data['dob'])
        date.toLocaleDateString(year, month, day)
        console.log(date) 
        console.log(date) */
      })
  }
  updateUser(){
    console.log(this.user)
    this._http.updatePlayerService(this.user)
      .subscribe(data=>{
        console.log(data)
        return this._router.navigate(['roster'])
      })
  }

  logout(){
    this._http.delSessionService()
  }
}
