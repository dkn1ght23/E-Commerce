import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../app-core/services/user.service";
import {User} from "../../../app-core/models/user.model";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user!: User;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.user = this.userService.GetUserData();
    //console.log(this.user);
  }

}
