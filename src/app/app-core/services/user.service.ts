import {Injectable} from "@angular/core";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})

export class UserService{

  userInfo!: User;

  public IsLoggedInUser(): boolean{
    return this.userInfo && this.userInfo.IsLoggedIn;
  }

  public GetUserData(){
    return this.userInfo;
  }

  public setUserOnLoggedIn(userInfo: any){
    this.userInfo = userInfo;
  }

}
