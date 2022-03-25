import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootBrowserRoutingModule } from './root-browser-routing.module';
import { RootDefaultComponent } from './components/root-default/root-default.component';
import {BrowserModule} from "@angular/platform-browser";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Error404Component } from './components/error404/error404.component';
import {AppGenericsModule} from "../app-generics/app-generics.module";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    RootDefaultComponent,
    DashboardComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RootBrowserRoutingModule,
    AppGenericsModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [
    RootDefaultComponent
  ]
})
export class RootBrowserModule { }
