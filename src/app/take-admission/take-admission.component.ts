import { Component } from '@angular/core';
import {FormBuilder,Validators,  } from '@angular/forms'
@Component({
  selector: 'app-take-admission',
  templateUrl: './take-admission.component.html',
  styleUrls: ['./take-admission.component.css']
})
export class TakeAdmissionComponent {
  
  constructor(public fbobj : FormBuilder)
  {
  }
  
  TechFiestaform = this.fbobj.group(
    {
      // Add Multiple validations
      firstname :['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')] ],
      middlename :['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')] ],
      lastname :['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')] ],
      phone :['',[Validators.required,Validators.minLength(10), Validators.pattern('[0-9]{10}')]],
      parentsphone :['',[Validators.required,Validators.minLength(10), Validators.pattern('[0-9]{10}')]],
      email: ['', Validators.compose([Validators.required,Validators.email,Validators.pattern('[A-Za-z0-9._]+@[A-Za-z0-9.]+\.[a-z]{2}')])],
      edu: ['', [Validators.required,Validators.pattern('^[A-Z ]*$')] ],
      amount : ['',[Validators.required,Validators.minLength(1000), Validators.maxLength(20000),Validators.pattern('[0-9]{10}')]],
      check: ['',[Validators.required]]
    }
  );
}
