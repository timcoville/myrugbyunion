import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; 
import { HttpService } from './http.service';
import { HomeComponent } from './home/home.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { DashComponent } from './dash/dash.component';
import { ProfileComponent } from './profile/profile.component';
import { RosterComponent } from './roster/roster.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AdminComponent } from './admin/admin.component';
import { DuesComponent } from './dues/dues.component';
import { NgxStripeModule } from 'ngx-stripe';
import { StripeFormComponent } from './stripe-form/stripe-form.component';



@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashComponent,
    ProfileComponent,
    RosterComponent,
    ScheduleComponent,
    AdminComponent,
    DuesComponent,
    StripeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule,
    NgxStripeModule.forRoot('pk_test_SikI4i4ruABOuhiuMasln93X'),
    ReactiveFormsModule

 

  ],
  providers: [HttpService, CookieService],
  bootstrap: [AppComponent]
})

export class AppModule { }
