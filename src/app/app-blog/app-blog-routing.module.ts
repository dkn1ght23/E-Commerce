import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogDefaultComponent} from "./components/blog-default/blog-default.component";
import {WriteBlogComponent} from "./components/write-blog/write-blog.component";

const routes: Routes = [
  {
    path: '',
    component: BlogDefaultComponent,
    children:[
      {
        path: 'create',
        component: WriteBlogComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppBlogRoutingModule { }
