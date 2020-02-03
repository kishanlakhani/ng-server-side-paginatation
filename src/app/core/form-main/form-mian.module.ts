import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormMianRoutingModule } from './form-mian-routing.module';
import { FormMainComponent } from './form-main.component';
import { FormAddEditComponent } from './form-add-edit/form-add-edit.component';
import { FormShowComponent } from './form-show/form-show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';


@NgModule({
    
    declarations: [FormMainComponent,FormAddEditComponent,FormShowComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PaginationModule,
    FormMianRoutingModule
  ]
})
export class FormMianModule { }
