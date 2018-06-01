import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import * as io from 'socket.io-client';



@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  socket;
  users: any;
  user: any;
  authority: any;
  event: any;
  constructor(
    private _http: HttpService) {
      this._http.verifySession()
    }

  ngOnInit() {
    this.user = {
      firstName: '',
      lastName: '',
    }
    this.event = {
      id: '',
      title: '',
      type: '',
      startTime: '',
      location: '',
      address: {
        street: '',
        city: '',
        state: '',
        zip: ''
      }
    }
    this.users = []
    this.socket = io()
    this.getUser()
    this.getEvent()
    this.getChat()
    this.socket.on('addUser', (data)=>{
      this.getChat()
        console.log(data)
      })
    this.socket.on('removeUser', (data)=>{
      this.getChat()
    })
  }
  getChat(){
    this._http.chatUsersService()
      .subscribe(data=>{
        this.users = data['users']
        console.log(this.users)

      })
  }

  getUser(){
    this._http.getUserService()
      .subscribe(data=>{
        this.user.firstName = data['firstName']
        this.user.lastName = data['lastName']
        this.authority = data['authority']
        
      })
  }

  removeUser(){
    this._http.removeUserService(this.user)
      .subscribe(data => {
        
      })
  }

  logout(){
    this._http.delSessionService()
  }

  getEvent(){
    this._http.getLatestEventService()
      .subscribe(data=>{
        this.event = data[0]
        console.log(this.event)
        let weather = {
          city: this.event.address.city,
          date: this.event.startTime
        }
        /* this.getWeather(weather) */
      })
  }

  getWeather(zipcode){
    this._http.getWeatherService(zipcode)
      .subscribe(data=>{
        console.log(data)
      })
  }

  addUser(){
    let name = {'name': this.user.firstName + ' ' + this.user.lastName}
    this._http.addUserToEventService(this.event._id, name)
      .subscribe(data=>{
        console.log(data)
      })
  }
  
}
