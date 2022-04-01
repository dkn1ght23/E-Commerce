import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-with-email',
  templateUrl: './login-with-email.component.html',
  styleUrls: ['./login-with-email.component.scss']
})
export class LoginWithEmailComponent implements OnInit {

  loginForm = new FormGroup({
    Email: new FormControl('', [Validators.email, Validators.required]),
    Password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onLoginFormSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.getRawValue())
    }
  }

}
