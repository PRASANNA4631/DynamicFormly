import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { PersonInformationRoutingModule } from './person-information-routing.module';
import { FamilyDetailsComponent } from './family-details/family-details.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { AssetsDetailsComponent } from './assets-details/assets-details.component';


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
