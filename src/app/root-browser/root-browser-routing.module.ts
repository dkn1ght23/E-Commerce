import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {Error404Component} from "./components/error404/error404.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootBrowserRoutingModule { }

