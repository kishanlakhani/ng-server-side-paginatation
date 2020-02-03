import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthGuardCheckService } from './services/auth-guard-check.service';


const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'home' , redirectTo:'/',pathMatch:'full'},
  { path: 'auth' , loadChildren: ()=>import('./core/auth/auth.module').then(m=>m.AuthModule) ,
  // canActivate:[AuthGuardCheckService]
},
  { path: 'form',loadChildren: ()=>import('./core/form-main/form-mian.module').then(m=>m.FormMianModule),
  canActivate:[AuthGuardService]  
},
  { path: '**' , component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
