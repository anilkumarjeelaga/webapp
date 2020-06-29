import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
// import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileFormGroup.valueChanges.subscribe((changesObj) => {
      console.log(changesObj);
    });
  }
  // profilFormGroup = new FormGroup({
  //  firstName:new FormControl(''),
  //  lastName:new FormControl('', Validators.required),
  //  this.address = new FormGroup({

  //  })
  // })
  profileFormGroup = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });
  updateFewProfileControls() {
    this.profileFormGroup.patchValue({
      firstName: 'mathew',
      address: {
        street: 'street 123 example',
      },
    });
  }

  updateAllProfileControls() {
    this.profileFormGroup.setValue({
      firstName: 'Jacob',
      lastName: 'selva',
      address: {
        street: '10-5 street',
        city: 'hyd',
        state: 'TS',
        zip: '', // In setValue method, we can pass empty values. But, we should not miss any form control.
      },
    });
  }
  onSubmit() {
    console.log(this.profileFormGroup.value);
    console.log(this.profileFormGroup.status);
    console.log(this.profileFormGroup.valid);
  }
}
