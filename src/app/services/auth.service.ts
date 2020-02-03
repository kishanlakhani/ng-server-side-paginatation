import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { throwError, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http:HttpClient,
    private router:Router
    ) { }


  signup(postData){
   return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZkIVosqzwDvGZN97UGs0Ai9AkDO0G6tw',{
      email:postData.email,
      password:postData.password,
      returnSecureToken:true
    }).pipe(map(res=>{
      console.log(res);
    }))
  }

  signin(postData){
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZkIVosqzwDvGZN97UGs0Ai9AkDO0G6tw',{
      email:postData.email,
      password:postData.password,
      returnSecureToken:true
    }).pipe(map(res=>{
      console.log(res);
      if(res.hasOwnProperty('kind')){
        localStorage.setItem('token',res.toString());
        console.log('it work')
      }
    }))

  }


  isLoggedIn(){
    if(localStorage.getItem('token')){
      return true;
    }
    this.router.navigate(['/auth']);
    return false
  }

  logout(){
    localStorage.removeItem('token'); 
    this.router.navigate(['/auth']);
    // this.router.navigate(['/auth']);
  }

}
