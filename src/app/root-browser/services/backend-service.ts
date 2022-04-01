import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})

export class BackendService{

  baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {

  }

  register(payload: any){
    let registrationUrl= `${this.baseUrl}/register`;
    return this.httpClient.post(registrationUrl, payload);
  }
}
