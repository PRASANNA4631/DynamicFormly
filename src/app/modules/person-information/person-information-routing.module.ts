import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationDetailsComponent } from './Components/education-details/education-details.component';

const routes: Routes = [
  {path:'educationdetails', component:EducationDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonInformationRoutingModule { }
