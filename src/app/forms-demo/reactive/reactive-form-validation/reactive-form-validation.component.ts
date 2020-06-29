import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from '../../../validators/forbidden-name.validator';
import { UniqueUserNameValidator } from '../../../validators/unique-user-name.async-validator';
import { checkboxRequiredValidator } from '../../../validators/checkbox-required.validator';
@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css'],
})
export class ReactiveFormValidationComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private uniqueUserNameValidator: UniqueUserNameValidator
  ) {}
  powers = ['really Great', 'really smart', 'simply superb', 'great'];

  vehiclesArr = [
    { label: 'Two Wheeler', value: 'two-wheeler', selected: false },
    { label: 'Four Wheeler', value: 'four-wheeler', selected: false },
    { label: 'Private Chopper', value: 'private-chopper', selected: false },
    { label: 'Private Plain', value: 'private-plain', selected: false },
  ];

  heroFormGroup: FormGroup;
  ngOnInit() {
    this.heroFormGroup = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
      alterEgo: [''],
      power: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      secondaryEmail: [
        '',
        [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')],
      ],
      available: ['yes', Validators.required],
      nickName: [
        '',
        [Validators.required, forbiddenNameValidator(['jake', 'mike', 'like'])],
      ],
      userName: [
        '',
        [Validators.required],
        this.uniqueUserNameValidator.validate.bind(
          this.uniqueUserNameValidator
        ),
      ],
      vehicles: this.buildVehicleCheckBoxControls(),
    });

    this.heroFormGroup.valueChanges.subscribe((changesObj) => {
      console.log(changesObj);
      // console.log(this.heroFormGroup.get('vehicles'));
    });
  }

  buildVehicleCheckBoxControls() {
    let vehicleCheckBoxControls = [];
    this.vehiclesArr.forEach((vehicle) => {
      let control = this.fb.control(vehicle.selected);
      vehicleCheckBoxControls.push(control);
    });

    return new FormArray(vehicleCheckBoxControls, checkboxRequiredValidator());
  }

  // getter method
  get name() {
    return this.heroFormGroup.get('name');
  }
  get power() {
    return this.heroFormGroup.get('power');
  }
  get alterEgo() {
    return this.heroFormGroup.get('alterEgo');
  }
  get email() {
    return this.heroFormGroup.get('email');
  }
  get secondaryEmail() {
    return this.heroFormGroup.get('secondaryEmail');
  }
  get available() {
    return this.heroFormGroup.get('available');
  }
  get nickName() {
    return this.heroFormGroup.get('nickName');
  }
  get userName() {
    return this.heroFormGroup.get('userName');
  }
  get vehicles() {
    return this.heroFormGroup.get('vehicles');
  }

  onSubmit() {
    console.log(this.heroFormGroup.value);
    let payload = { ...this.heroFormGroup.value };
    payload.vehicles = this.getVehicleValues(payload.vehicles);
    console.log(payload);
  }

  getVehicleValues(checkboxValues: Boolean[]) {
    let values: string[] = [];
    checkboxValues.forEach((val, index) => {
      if (val) {
        values.push(this.vehiclesArr[index].value);
      }
    });
    return values;
  }
}
