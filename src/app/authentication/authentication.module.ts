import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginWithEmailComponent } from './components/login-with-email/login-with-email.component';
import { AuthenticationDefaultComponent } from './components/authentication-default/authentication-default.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    LoginWithEmailComponent,
    AuthenticationDefaultComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [
    AuthenticationDefaultComponent
  ]
})
export class AuthenticationModule { }
