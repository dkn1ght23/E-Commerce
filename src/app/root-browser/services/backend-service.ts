import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SessionService} from "./session.service";

/*const httpOptions = {
  headers: new HttpHeaders({})
};*/

@Injectable({
  providedIn: "root"
})

export class BackendService{

  baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient,
              private sessionService: SessionService) {
  }

  getAuthenticationParams(){
    //sending the token to the node server
    let headers = new HttpHeaders();
    headers = headers.append('Authentication', this.sessionService.getToken());
    //console.log(headers);
    return {headers: headers};
  }

  register(payload: any){
    let registrationUrl= `${this.baseUrl}/register`;
    return this.httpClient.post(registrationUrl, payload);
  }

  login(payload: any){
    let registrationUrl= `${this.baseUrl}/login`;
    return this.httpClient.post(registrationUrl, payload);
  }

  getLoggedInUser(){
    let userDetailsUrl = `${this.baseUrl}/uam/GetLoggedInUser`;
    return this.httpClient.get(userDetailsUrl,this.getAuthenticationParams());
  }

  createNewBlog(blogData: any) {
    let blogCreateUrl = `${this.baseUrl}/blog/create`;
    return this.httpClient.post(blogCreateUrl, blogData, this.getAuthenticationParams());
  }


}
