import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBlogRoutingModule } from './app-blog-routing.module';
import { BlogDefaultComponent } from './components/blog-default/blog-default.component';
import { WriteBlogComponent } from './components/write-blog/write-blog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    BlogDefaultComponent,
    WriteBlogComponent
  ],
  imports: [
    CommonModule,
    AppBlogRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class AppBlogModule { }
