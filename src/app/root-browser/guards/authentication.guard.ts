import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {SessionService} from "../services/session.service";
import {Injectable} from "@angular/core";
import {Location} from "@angular/common";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate{

  public constructor(private router: Router,
                     private sessionService: SessionService,
                     private location: Location) {
  }

  cleanUrl(path: string){
    if(path.indexOf("?") >= 0){
      return path.split("?")[0];
    }
    return path;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //setting path to redirect to the exact location where the user belong
    let path = this.location.path();
    path = this.cleanUrl(path);
    let token = this.sessionService.getToken();
    //console.log('session token: ', token);
    if(token === null || token === undefined){
      this.router.navigate(['/auth/login'], {queryParams: {redirect: path}});
      return false;
    }
    return true;
  }

}
