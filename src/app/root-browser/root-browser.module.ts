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
import {BackendService} from "./services/backend-service";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SessionService} from "./services/session.service";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {UserService} from "../app-core/services/user.service";


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
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  providers: [
    BackendService,
    SessionService,
    AuthenticationGuard,
    UserService
  ],
  bootstrap: [
    RootDefaultComponent
  ]
})
export class RootBrowserModule { }
