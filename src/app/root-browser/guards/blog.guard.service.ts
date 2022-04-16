import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {SessionService} from "../services/session.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate{

  public constructor(private router: Router,
                     private sessionService: SessionService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = this.sessionService.getToken();
    console.log('session token: ', token);
    if(token === null || token === undefined){
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }

}
