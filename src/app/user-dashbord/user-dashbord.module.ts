import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashbordRoutingModule } from './user-dashbord-routing.module';
import { ViewComponent } from './view/view.component';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewComponent,
  
    
  ],
  imports: [
    CommonModule,
    UserDashbordRoutingModule,
    ReactiveFormsModule,
    FormsModule
  
  ]
})
export class UserDashbordModule { }
