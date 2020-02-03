import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
import { FormMianRoutingModule } from './form-mian-routing.module';
import { FormMainComponent } from './form-main.component';
import { FormAddEditComponent } from './form-add-edit/form-add-edit.component';
import { FormShowComponent } from './form-show/form-show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [FormMainComponent,FormAddEditComponent,FormShowComponent],
  imports: [
    CommonModule,
    FormsModule,
    // HttpClientModule,
    ReactiveFormsModule,
    PaginationModule,
    FormMianRoutingModule
  ]
})
export class FormMianModule { }
