import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserLoginForm:FormGroup
  constructor(){
    this.UserLoginForm=new FormGroup({
      email:new FormControl('',[Validators.email,Validators.required]),
      password:new FormControl('',[Validators.required])
    })

  }

  ngOnInit(): void {
    
  }
  OnSubmit(){
    console.log("User Login form value is",this.UserLoginForm.value);
    
  }
  

}
