import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
