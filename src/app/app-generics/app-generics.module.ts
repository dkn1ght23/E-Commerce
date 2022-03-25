import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import {MatDividerModule} from "@angular/material/divider";



@NgModule({
  declarations: [
    TopNavComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports: [
    TopNavComponent
  ]
})
export class AppGenericsModule { }
