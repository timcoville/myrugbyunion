import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({

  selector: 'sd-stripe-form',
  templateUrl: 'stripe-form.component.html',
  styleUrls: ['stripe-form.component.css']
})

export class StripeFormComponent  {
  authority: any;
  constructor(
    private _http: HttpService) {
      this._http.verifySession()
      this.getUser()
    }
  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({
      name: 'Rugby Club Dues',
      description: 'For Year',
      amount: 15000
    });

    
  
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
