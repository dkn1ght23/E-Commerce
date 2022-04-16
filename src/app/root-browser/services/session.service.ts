import {Injectable} from "@angular/core";

export const TOKEN_KEY = "TOKEN";

@Injectable({
  providedIn: 'root'
})

export class SessionService{

  private session = sessionStorage;

  public setToken(token: string): void{
    this.session.setItem(TOKEN_KEY, token);
  }

  public getToken(): string{
    // @ts-ignore
    return this.session.getItem(TOKEN_KEY);
  }
}
