import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IForm } from '../model/form.model';
import { Observable } from 'rxjs';
import { IfStmt } from '@angular/compiler';
  // import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService  {

  dbUrl:string = 'http://localhost:3000/users' 
  // a = {
  //   "id": 11,
  //   "name": "Clementina DuBuque",
  //   "username": "Moriah.Stanton",
  //   "email": "Rey.Padberg@karina.biz",
  //   "age": 19,
  //   "salary": 12500
  // };
  constructor(
    private http:HttpClient
  ) { }


  getJsonLength(): Observable<IForm[]>{
    return this.http.get(this.dbUrl).pipe(map((d:IForm)=>{
        return d.map(d=>d);
    }))
  }

  getJsonData(page,sort): Observable<IForm[]>{
  
      // return this.http.get(this.dbUrl).pipe(map((d:IForm)=>[...d]))
      return this.http.get(this.dbUrl+'?_page='+page+'&_limit=5'+'&_sort='+sort+'&_order=desc')
      .pipe(map((d:IForm)=>{
        return d.map((d1)=>{
          return {id:d1.id,name:d1.name,email:d1.email,salary:d1.salary}
        })
      })) 
  }

  // getSalaryFilterData(page){
  //   return this.http.get(this.dbUrl+'?_page='+page+'&_limit=5').pipe(map((d:IForm)=>{
  //     return d.map(d1=>d1);
  //   })) 
  // }

  updateJsonData({id,name,email,salary}){
    return this.http.put(this.dbUrl+'/'+id,{name,email,salary})
  }
  addJsonData({name,email,salary}){
    return this.http.post(this.dbUrl,{name,email,salary});
  }
  
  getSingleJsonData(id){
    return this.http.get(this.dbUrl+'/'+id);
  }

  deleteJsonData(id){
    return this.http.delete(this.dbUrl+'/'+id);
  }

}
