import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function containsDigitValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const containsDigit = (/[0-9]/).test(control.value);
    return containsDigit ? null : {forbiddenPassword: {value: control.value}};
  };
}

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isEmail = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(control.value);
    return isEmail ? null : {forbiddenUsername: {value: control.value}};
  };
}
