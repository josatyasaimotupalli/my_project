import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  UserViewForm: FormGroup;

  constructor() {
    this.UserViewForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      userLastName: new FormControl('', [Validators.required]),  // Fix typo here
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  OnSubmit(): void {
    console.log("User Register form value is", this.UserViewForm.value);
  }
}
