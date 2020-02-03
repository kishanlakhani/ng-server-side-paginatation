import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router:Router,
    private authService:AuthService
    ) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

      //check some condition  
      if (!this.authService.isLoggedIn())  {
          alert('You are not allowed to view this page');
          //redirect to login/home page etc
          //return false to cancel the navigation
          return false;
      } 
      return true;
  }

}
