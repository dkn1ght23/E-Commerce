import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootBrowserRoutingModule } from './root-browser-routing.module';
import { RootDefaultComponent } from './components/root-default/root-default.component';
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    RootDefaultComponent
  ],
  imports: [
    BrowserModule,
    RootBrowserRoutingModule
  ],
  providers: [],
  bootstrap: [
    RootDefaultComponent
  ]
})
export class RootBrowserModule { }
