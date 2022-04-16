import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BackendService} from "../../../root-browser/services/backend-service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SessionService} from "../../../root-browser/services/session.service";
import {ActivatedRoute, Router} from "@angular/router";

// noinspection JSDeprecatedSymbols
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

  redirect: string = "";

  constructor(private backendService: BackendService,
              private snackBar: MatSnackBar,
              private sessionService: SessionService,
              private router: Router,
              private routes: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.subscribeForQueryParams();
  }

  subscribeForQueryParams(){
    this.routes.queryParams.subscribe((params: any) => {
      //console.log(params);
      this.redirect = params.redirect;
    })
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
        if (response) {
          if (response.token) {
            this.sessionService.setToken(response.token);
            if (this.redirect) {
              this.router.navigate([this.redirect]);
              console.log("working");
            } else {
              this.router.navigate(['/home']);
            }
          }
        }
      }, error => {
        let errorMessage = error.error.message;
        this.showToast(errorMessage);
      })
    }
  }

}
