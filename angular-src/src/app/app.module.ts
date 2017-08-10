import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthenticationComponent} from "./authentication/authentication.component";
import {SignupComponent} from "./authentication/signup.component";
import {LoginComponent} from "./authentication/login.component";
import {LogoutComponent} from "./authentication/logout.component";
import {routing} from './app.routing';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {AuthenticationService} from "./authentication/authentication.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    SignupComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,routing,FormsModule,ReactiveFormsModule,HttpModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
