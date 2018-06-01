import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  events;
  authority;
  constructor(private _http: HttpService) {this._http.verifySession()}

  ngOnInit() {
    this.events = []
    this.getSchedule()
    this.getUser()
  }

  getSchedule(){
    this._http.getScheduleService()
      .subscribe(data=>{
        this.events = data
      })
  }

  getUser(){
    this._http.getUserService()
      .subscribe(data=>{

        this.authority = data['authority']
        
      })
  }
}
