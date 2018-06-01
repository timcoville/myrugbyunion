import { Component, OnInit, OnDestroy } from '@angular/core';
import * as io from 'socket.io-client';

import { HttpService } from '../http.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  message;
  socket;
  messages;
  user;
  users;
  connection;
  authority;
  constructor(private _http: HttpService){this._http.verifySession()}

  ngOnInit() {

      this.socket = io()
      this.messages = []
      this.message = ""
      this.user = {
        firstName: '',
        lastName: '',
      }
      this.connection = {
        socketID: this.socket.id, 
      }
      console.log(this.connection)
      this.users = []
      this.getUser()
      //Recieve new messages from group
      this.socket.on('updateall', (data)=>{
        console.log(data)
        this.messages.unshift(data)
      })

      //Listening for new users to update users array
      this.socket.on('addUser', (data)=>{
      this.getUsers()
        console.log(data)
      })
      this.socket.on('removedUser', ()=>{
        this.getUsers() 
      })


  }
  ngOnDestroy(){
    if(this.socket){
      this.socket.emit('destroyed')
    }
  }

  // Send Message on Submit
  sendMessage(){
    this.messages.unshift(this.user.firstName + ' ' + this.user.lastName + ": " + this.message)
    this.socket.emit('message', { msg: this.message, id: this.user.firstName + ' ' + this.user.lastName})
    this.message = "";
  }

  // Get User
  getUser(){
    this._http.getUserService()
      .subscribe(data=>{
        this.user.firstName = data['firstName']
        this.user.lastName = data['lastName']
        this.authority = data['authority']
        // After we get User name back, we emit new user to server with data
        this.socket.emit('newUser', {'newUser': this.user.firstName + ' ' + this.user.lastName})
      })
  }

  // Get Users in Chat
  getUsers(){
    this._http.chatUsersService()
      .subscribe(data=>{
        this.users = data['users']
        console.log("Users in Chat:", this.users)

      })
  }

  logout(){
    this._http.delSessionService()
  }

}
