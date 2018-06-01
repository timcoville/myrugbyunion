import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService} from 'angular2-cookie/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  id: any;
  constructor(
    private _http: HttpClient,
    private _cookie: CookieService,
    private _router: Router) { }

  loginService(data){
    return this._http.post('api/login', data)
  }
  registerService(data){
    return this._http.post('api/register', data)
  }

  setSessionService(id){
    this.id = id
    this._cookie.put('ID', this.id)
    console.log("Session ID", this.id)
  }

  delSessionService(){
    this._cookie.remove('ID')
    this._router.navigate([''])
  }

  verifySession(){
    var verSess = this._cookie.get('ID')
    if (!verSess){
      return this._router.navigate(['']);
    }
    else {
      console.log("Session ID", verSess)
    }
  }

  chatUsersService(){
    return this._http.get('/api/userschat')
  }

  getUserService(){
    var search = this._cookie.get('ID')
    return this._http.get('/api/players/'+search)
  }

  removeUserService(user){
    return this._http.post('/api/userschat', user)
  }

  updatePlayerService(data){
    var search = this._cookie.get('ID')
    console.log(data)
    return this._http.put('/api/updateplayer/'+search, data)
  }

  getPlayers(){
    return this._http.get('/api/players')
  }

  addEventService(event){
    return this._http.post('/api/events', event)
  }

  getScheduleService(){
    return this._http.get('/api/schedule')
  }
  
  getLatestEventService(){
    return this._http.get('/api/latestevent')
  }

  getWeatherService(weather){
    let date = Date.parse(weather.date)
    return this._http.get('http://history.openweathermap.org/data/2.5/history/city?q='+weather.city+',us&type=hour&start='+date+'&cnt=1&appid=184f4974e12a5cb0bc1ead3e9857f362')
  }

  addUserToEventService(id, user){
    return this._http.post('/api/eventlist/'+id, user)
  }
}
