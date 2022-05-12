import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {BackendService} from "../../../root-browser/services/backend-service";

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.scss']
})
export class WriteBlogComponent implements OnInit {

  blogCategories: string[] = [];

  separatorKeysCodes: number[] = [ENTER, COMMA];

  newBlogPost = new FormGroup( {
    title: new FormControl('', [
      Validators.required, Validators.maxLength(200)]),
    description: new FormControl('', [
      Validators.required, Validators.maxLength(800)]),
    categories: new FormControl([], []),
  })

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
  }

  onCategoryRemove(category: string) {
    if (this.blogCategories.indexOf(category) >= 0) {
      this.blogCategories = this.blogCategories.filter(item => item != category);
    }
  }

    onCategoryAdd($event: any) {
    let value = $event.value;
    if (this.blogCategories.indexOf(value) < 0) {
      this.blogCategories.push(value);
    }
    this.newBlogPost.patchValue({
      categories: ''
    })
  }

  onSubmitForm(){
    if(this.newBlogPost.valid){
      let formData: any = this.newBlogPost.getRawValue();
      formData.categories = this.blogCategories;

      this.backendService.createNewBlog(formData).subscribe((response: any) => {
        console.log(response)
      })
    }
  }

}
