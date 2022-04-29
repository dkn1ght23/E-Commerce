import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBlogRoutingModule } from './app-blog-routing.module';
import { BlogDefaultComponent } from './components/blog-default/blog-default.component';
import { WriteBlogComponent } from './components/write-blog/write-blog.component';


@NgModule({
  declarations: [
    BlogDefaultComponent,
    WriteBlogComponent
  ],
  imports: [
    CommonModule,
    AppBlogRoutingModule
  ]
})
export class AppBlogModule { }
