import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BackendService} from "../../../root-browser/services/backend-service";
import {MatSnackBar} from "@angular/material/snack-bar";

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

  constructor(private backendService: BackendService,
              private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
  }

  showToast(message: string){
    this.snackBar.open(message, '', {
      duration: 3000
    });
  }

  onLoginFormSubmit(){
    if(this.loginForm.valid){
      let payload = this.loginForm.getRawValue();
      this.backendService.login(payload).subscribe((response: any) => {
        this.showToast(response.message);
      }, error => {
        let errorMessage = error.error.message;
        this.showToast(errorMessage);
      })
    }
  }

}
