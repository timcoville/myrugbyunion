import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  players: any
  authority: any
  constructor(private _http: HttpService) {      this._http.verifySession() }

  ngOnInit() {
    this.players = []
    this.getPlayers()
    this.getUser()
  }

  getPlayers(){
    this._http.getPlayers()
      .subscribe(data=>{
       this.players = data
       console.log(data)
      })
  }

  getUser(){
    this._http.getUserService()
      .subscribe(data=>{

        this.authority = data['authority']
        
      })
  }
  logout(){
    this._http.delSessionService()
  }
}
