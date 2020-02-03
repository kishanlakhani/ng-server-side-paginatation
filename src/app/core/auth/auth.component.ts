import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { error } from 'protractor';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoggedIn:boolean = true;
  isLoading:boolean = false;
  error:string = null;
  authHandel:Observable<any>;
  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAuthFormSubmit(formData){
    this.error = null;
    this.isLoading =true
    if(this.isLoggedIn){
      this.authHandel =   this.authService.signin(formData)
    }else{
     this.authHandel =  this.authService.signup(formData)
    //  this.isLoading = !
    }
    this.authHandel.subscribe(res=>{
      console.log(res);
      this.isLoading = false;
      this.router.navigate(['/form']);
    },err=>{
      this.isLoading = false;
      this.error =  err.error.error.message;
      console.log(err)
      // console.log(error.error.error.message)
    });
    
  }

  onSwitchMode(){
    this.isLoggedIn = !this.isLoggedIn;
    console.log(this.isLoggedIn)
  }

}
