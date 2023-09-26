import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  UserViewForm:FormGroup
  constructor(){
    this.UserViewForm=new FormGroup({
      userName:new FormControl('',[Validators.required]),
      userLestName:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.email,Validators.required]),
      password:new FormControl('',[Validators.required])
    })

  }

  ngOnInit(): void {
    
  }
  OnSubmit(){
    console.log("User Register form value is",this.UserViewForm.value);
    
  }

}
