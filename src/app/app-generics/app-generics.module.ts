import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import {MatDividerModule} from "@angular/material/divider";
import {RouterModule} from "@angular/router";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    TopNavComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    TopNavComponent
  ]
})
export class AppGenericsModule { }
