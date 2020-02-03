import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormShowComponent } from './form-show/form-show.component';
import { FormAddEditComponent } from './form-add-edit/form-add-edit.component';
import { FormMainComponent } from './form-main.component';


const routes: Routes = [
  {
    path:'',children:[
      { path: 'show' , component:FormShowComponent },
      { path:'add',component:FormAddEditComponent },
      { path:'add/:id',component:FormAddEditComponent },
      { path:'',redirectTo: '/form/show',pathMatch:'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormMianRoutingModule { }
