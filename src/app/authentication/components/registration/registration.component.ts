import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BackendService} from "../../../root-browser/services/backend-service";

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

  constructor(private backendService: BackendService) {

  }

  ngOnInit(): void {

  }

  onRegiFormSubmit(){
    if(this.regiForm.valid){
      let payload: any = this.regiForm.getRawValue();
      this.backendService.register(payload).subscribe((response: any) => {
        console.log(response);
      })
    }
  }

}
