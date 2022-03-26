import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginWithEmailComponent} from "./components/login-with-email/login-with-email.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginWithEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
