import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppProfileRoutingModule } from './app-profile-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    AppProfileRoutingModule
  ]
})
export class AppProfileModule { }
