import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ind-register',
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <input type="email" name="email" formControlName="email" />
      <input type="password" formControlName="passwd" />
      <input type="text" name="firstName" formControlName="firstName" />
      <input type="text" name="surname" formControlName="surname" />
      <input type="radio" name="gender" ... formControlName="gender" />
      <select name="country" formControlName="country">
        <option value="">Selecciona un país</option>
        ...
      </select>
      <input type="date" name="birthDateIso" formControlName="birthDateIso" />
      <textarea name="bio" formControlName="bio"></textarea>
      <input type="checkbox" name="termsAcceptance" formControlName="termsAcceptance" />
    </form>
  `,
  styles: ``,
})
export class Register {


  private readonly fb = inject(FormBuilder);

  protected readonly form: FormGroup = this.fb.group({
    email: [''],
    passwd: [''],
    firstName: [''],
    surname: [''],
    gender: [''],
    country: [''],
    birthDateIso: [''],
    bio: [''],
    termsAcceptance: [false]
  });

}
