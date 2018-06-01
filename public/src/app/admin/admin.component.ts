import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  event: any
  constructor(private _http: HttpService) {
    this._http.verifySession()
   }

  ngOnInit() {
    this.event = {
      title: '',
      type: '',
      startTime: '',
      address: {
        street: '',
        city: '',
        state: '',
        zip: ''
      },
      location: ''

    }
  }

  addEvent(){
    this._http.addEventService(this.event)
      .subscribe(data=>{
        console.log(data)
        this.event = {
          title: '',
          type: '',
          startTime: '',
          address: {
            street: '',
            city: '',
            state: '',
            zip: ''
          },
          location: ''
    
        }
      })
  }

  logout(){
    this._http.delSessionService()
  }

}
