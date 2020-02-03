import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardCheckService implements CanActivate {

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

//check some condition  
if (this.authService.isLoggedIn())  {
alert('You already login');
//redirect to login/home page etc
//return false to cancel the navigation
this.router.navigate(['/form'])
return false;
} 
return true;
}
}
