import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BackendService} from "../../../root-browser/services/backend-service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  regiForm = new FormGroup({
    Email: new FormControl('', [Validators.email, Validators.required]),
    Password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    FirstName: new FormControl('',[Validators.required]),
    LastName: new FormControl('',[Validators.required]),
    PhoneNumber: new FormControl('',[Validators.required]),
  })

  constructor(private backendService: BackendService,
              private snackBar: MatSnackBar,
              private router: Router) {

  }

  ngOnInit(): void {

  }

  showToast(message: string){
    this.snackBar.open(message, '', {
      duration: 3000
    });
  }

  onRegiFormSubmit(){
    if(this.regiForm.valid){
      let payload: any = this.regiForm.getRawValue();
      this.backendService.register(payload).subscribe((response: any) => {
        this.showToast(response.message);
        this.router.navigate(['/auth/login']);
        //console.log(response);
      },error => {
          let errorMessage = error.error.message;
          this.showToast(errorMessage);
        })
    }
  }

}
