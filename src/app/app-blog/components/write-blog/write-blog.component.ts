import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.scss']
})
export class WriteBlogComponent implements OnInit {

  newBlogPost = new FormGroup( {
    title: new FormControl('', [
      Validators.required, Validators.maxLength(200)]),
    description: new FormControl('', [
      Validators.required, Validators.maxLength(800)]),
    categories: new FormControl([], []),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
