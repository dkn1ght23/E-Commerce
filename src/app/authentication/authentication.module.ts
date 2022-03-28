import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginWithEmailComponent } from './components/login-with-email/login-with-email.component';
import { AuthenticationDefaultComponent } from './components/authentication-default/authentication-default.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import { RegistrationComponent } from './components/registration/registration.component';


@NgModule({
  declarations: [
    LoginWithEmailComponent,
    AuthenticationDefaultComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [
    AuthenticationDefaultComponent
  ]
})
export class AuthenticationModule { }
