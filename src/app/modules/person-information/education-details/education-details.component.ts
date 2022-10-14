import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Contact } from '../Models/education.model';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styles: [
  ]
})
export class EducationDetailsComponent {

  contactForm: FormGroup
  contactModel!: Contact;
  contactFields!: Array<FormlyFieldConfig>

  constructor() { 
    this.contactForm = new FormGroup({});
    this.contactModel = new Contact;
    this.contactFields = this.contactModel.formFields();
  }

  submitForm(contact: Contact){
    console.log(contact)
  }

}
