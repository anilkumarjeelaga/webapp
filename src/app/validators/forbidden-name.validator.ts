// import { ValidatorFn, AbstractControl } from '@angular/forms';

// export function forbiddenNameValidator(names: Array<string>): ValidatorFn {
//   return (ctrl: AbstractControl): object | null => {
//     return names.indexOf(ctrl.value) > -1
//       ? { forbiddenName: { value: ctrl.value } }
//       : null;
//   };
// }
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(names: Array<string>): ValidatorFn {
  return (control: AbstractControl): object | null => {
    return names.indexOf(control.value) > -1
      ? { forbiddenName: { value: control.value } }
      : null;
  };
}
