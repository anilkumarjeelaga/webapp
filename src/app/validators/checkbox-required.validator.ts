import { FormArray, ValidatorFn } from '@angular/forms';

export function checkboxRequiredValidator(): ValidatorFn {
  return (checkboxesArray: FormArray): object | null => {
    let atLeastOneChecked = false;
    checkboxesArray.controls.forEach((checkbox) => {
      if (checkbox.value) {
        atLeastOneChecked = true;
      }
    });

    return atLeastOneChecked ? null : { required: true };
  };
}
