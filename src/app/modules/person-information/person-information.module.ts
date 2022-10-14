import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { PersonInformationRoutingModule } from './person-information-routing.module';
import { FamilyDetailsComponent } from './Components/family-details/family-details.component';
import { EducationDetailsComponent } from './Components/education-details/education-details.component';
import { AssetsDetailsComponent } from './Components/assets-details/assets-details.component';


@NgModule({
  declarations: [
    FamilyDetailsComponent,
    EducationDetailsComponent,
    AssetsDetailsComponent
  ],
  imports: [
    CommonModule,
    PersonInformationRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class PersonInformationModule { }
