import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit{
  UserForgetForm:FormGroup
  constructor(){
    this.UserForgetForm=new FormGroup({
      email:new FormControl('',[Validators.email,Validators.required]),
    })

  }

  ngOnInit(): void {
    
  }
  OnSubmit(){
    console.log("User forgetPassword form value is",this.UserForgetForm.value);
    
  }

}


