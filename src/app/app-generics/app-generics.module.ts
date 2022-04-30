import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import {MatDividerModule} from "@angular/material/divider";
import {RouterModule} from "@angular/router";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { FooterComponent } from './components/footer/footer.component';
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    TopNavComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        MatDividerModule,
        RouterModule,
        MatMenuModule,
        MatButtonModule,
        FlexLayoutModule
    ],
    exports: [
        TopNavComponent,
        FooterComponent
    ]
})
export class AppGenericsModule { }
