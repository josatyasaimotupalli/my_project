import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    ReactiveFormsModule,
    FormsModule
  
  ]
})
export class WebModule { }
