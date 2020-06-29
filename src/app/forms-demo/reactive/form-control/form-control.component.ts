import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css'],
})
export class FormControlComponent implements OnInit {
  name = new FormControl('', Validators.required);

  constructor() {}

  ngOnInit() {
    this.name.valueChanges.subscribe((currentValue) => {
      console.log(currentValue);
    });
  }

  readCurrentName() {
    console.log(this.name.value);
  }

  updateName() {
    this.name.setValue('Einstein');
  }
}
