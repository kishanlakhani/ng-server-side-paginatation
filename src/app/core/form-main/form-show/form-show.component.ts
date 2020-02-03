import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { IForm } from 'src/app/model/form.model';

@Component({
  selector: 'app-form-show',
  templateUrl: './form-show.component.html',
  styleUrls: ['./form-show.component.scss']
})
export class FormShowComponent implements OnInit {

  maxSize = 5;
  bigTotalItems = 0;
  bigCurrentPage = 1;

  page=1;
  sortForFilter='';

  isLoading:boolean = true;
  formListData:IForm[]=[];
  formLitSubcription:Subscription;
  constructor(
    private formService:FormService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {

    this.page = 1;
    // this.bigCurrentPage = 1;

    this.isLoading = true;

    this.formLitSubcription = this.route.queryParams.subscribe(param=>{
      // console.log(param['_page']);
      if(param['_page']){
        this.page=param['_page']
        // this.bigCurrentPage = this.page
        // console.log("page:",this.page)
      }
      console.log(param['_sort'])
      if(param['_sort']){
        this.sortForFilter = param['_sort'];
        console.log(this.sortForFilter)
      }

      this.formService.getJsonLength()
      .subscribe(l=>{
        // this.bigTotalItems = l.length;
        this.bigTotalItems = (l.length*10)/5;
        // console.log(this.bigTotalItems)
        this.formService.getJsonData(this.page,this.sortForFilter)
        .subscribe(
          (resData)=>{
            console.log("data come")
            this.isLoading = !this.isLoading
            console.log(resData);
            this.formListData = resData;
            console.log(this.formListData.length)            
          },
          err=>{console.log(err.message)},
          ()=>{
            // console.log("complet")
        }
          );
      },
      err=>{},
      ()=>{
      })

    })


    
     
  }

  ngOnDestroy(): void {
    console.log("destroy call")
    this.formLitSubcription.unsubscribe();
  }

  onDeleteCall(id){
    this.formService.deleteJsonData(id)
      .subscribe(res=>{
        console.log("del")
      },
      err=>{},
      ()=>{
            this.router.navigate(['/','form','show'])
      })
  }

  onPageClick(page){
    // console.log(page)
    this.router.navigate(['/','form','show'],{queryParams:{_page:page}})
    this.isLoading=!this.isLoading;

  }

  onSortClick(page){
    this.router.navigate(['form','show'],{queryParams:{_page:this.page,_sort:'salary'}})
    this.isLoading=!this.isLoading;

  }
  // onSalarySortingClick(){
  //   this.formService.getJsonData(this.page)
  //       .subscribe(
  //         (resData)=>{
  //           console.log("data come")
  //           this.isLoading = !this.isLoading
  //           console.log(resData);
  //           this.formListData = resData;
  //           console.log(this.formListData.length)            
  //         },
  //         err=>{console.log(err.message)},
  //         ()=>{console.log("complet")}
  //         );
  // }
}
