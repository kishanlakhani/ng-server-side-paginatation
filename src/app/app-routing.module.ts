import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'home' , redirectTo:'/',pathMatch:'full'},
  { path: 'auth' , loadChildren: ()=>import('./core/auth/auth.module').then(m=>m.AuthModule) },
  { path: 'form',loadChildren: ()=>import('./core/form-main/form-mian.module').then(m=>m.FormMianModule)},
  { path: '**' , component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
