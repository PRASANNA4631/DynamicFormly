import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path:'persondetails', loadChildren: () => import('./modules/person-information/person-information.module').then(m => m.PersonInformationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
