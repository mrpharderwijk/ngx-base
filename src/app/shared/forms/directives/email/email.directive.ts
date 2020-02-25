import { Directive, Input, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { ValidatorResult } from '../../../models/validator-result.model';

/**
 * Adds an email address validator to the control.
 *
 * This directive is different from the build-in "email" validator from Angular,
 * because the built-in validator allows extensionless domains (eg root@localhost).
 * This validator will require the format: name@domain.ext
 *
 * <example-url>../examples/index.html#/validation</example-url>
 * @example
 * <input [(ngModel)]="email" [ctEmail]="true">
 */
@Directive({
  selector: '[appEmail][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailDirective),
      multi: true,
    },
  ],
})
export class EmailDirective implements Validator {
  /**
   * Disable the email check?
   */
  @Input() pdEmail = true;

  constructor() {}

  validate(control: AbstractControl): ValidatorResult {
    if (this.pdEmail && !this.isEmailValid(control.value)) {
      const validated = {
        pdEmail: false,
        email: false,
      };
      return validated;
    }

    return null;
  }

  isEmailValid(emailAddress: string): boolean {
    /* tslint:disable */
    const emailRegexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    /* tslint:enable */

    const emailVal = emailRegexp.exec(emailAddress) !== null;
    return emailVal;
  }
}
