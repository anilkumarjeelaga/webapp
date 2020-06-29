import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  profileFormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });
  onSubmit() {
    console.log(this.profileFormGroup.value);
    console.log(this.profileFormGroup.status);
    console.log(this.profileFormGroup.valid);
  }
  updateFewFormControls() {
    this.profileFormGroup.patchValue({
      firstName: 'Andrews',
      address: {
        street: '123 street colony',
      },
    });
  }
  updateAllProfileControls() {
    this.profileFormGroup.setValue({
      firstName: 'philip',
      lastName: 'james',
      address: {
        street: '101 street',
        city: 'hyderabad',
        state: 'TS',
        zip: '', // In setValue method, we can pass empty values. But, we should not miss any form control.
      },
    });
  }
}
