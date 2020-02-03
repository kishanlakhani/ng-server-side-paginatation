import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatCurrency } from '@angular/common';
import { FormService } from 'src/app/services/form.service';
import { Subscription } from 'rxjs';
import { stringify } from 'querystring';

@Component({
  selector: 'app-form-add-edit',
  templateUrl: './form-add-edit.component.html',
  styleUrls: ['./form-add-edit.component.scss']
})
export class FormAddEditComponent implements OnInit {
  isAddOrUpdate:boolean = false;
  isLoading:boolean = false;
  idNumber:number;
  form:FormGroup;
  formSubscripton:Subscription;
  constructor(
    private formService:FormService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {

    this.isLoading = false;
    this.isAddOrUpdate = false;
    
    let name;
    let email;
    let salary;

    this.route.params.subscribe(param=>{
      if(param['id']){
        this.isAddOrUpdate = true;
        this.idNumber = param['id']
        this.isLoading = true;
        this.formService.getSingleJsonData(param['id'])
          .subscribe(res=>{
            console.log(res['name'])
            console.log(res['email'])
            console.log(res['salary'])
            name= res['name'];
            email = res['email'];
            salary = res['salary'];
            console.log(name,email,salary)
          },err=>{

          },()=>{
            this.form = new FormGroup({
              "name":new FormControl(name,Validators.required),
              "email":new FormControl(email,Validators.required),
              "salary":new FormControl(salary,Validators.required)
            });
            this.isLoading = !this.isLoading;

          })
      }
     
    });

    this.form = new FormGroup({
        "name":new FormControl(name,Validators.required),
        "email":new FormControl(email,Validators.required),
        "salary":new FormControl(salary,Validators.required)
      });
   
  }


  onFormSubmit(){
    console.log("form submit")
    if(this.isAddOrUpdate){
      this.formSubscripton =  this.formService.updateJsonData({
        id:this.idNumber,
        'name':this.form.get('name').value,
        'email':this.form.get('email').value,
        'salary':this.form.get('salary').value
      }).subscribe((res)=>{
        console.log(res)
      },err=>{},
      ()=>{
        this.router.navigate(['form','show']);
      })
    }else{
      this.formSubscripton =  this.formService.addJsonData({
        'name':this.form.get('name').value,
        'email':this.form.get('email').value,
        'salary':this.form.get('salary').value
      }).subscribe((res)=>{
        console.log(res)
      },err=>{},
      ()=>{
        this.router.navigate(['form','show']);
      })
    }
   
  }

  // ngOnDestroy(): void {
  //   console.log("form edit add destory call");
  //   this.formSubscripton.unsubscribe();
  // }

}
