import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'ind-register',
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
    <form [formGroup]="registerForm" (ngSubmit)="register()">
      <label for="email" class="form-group"
        >Email Email
        <input type="email" formControlName="email" />
      </label>

      @if (registerForm.get('email')?.invalid && registerForm.get('email')?.touched) {
        <div class="error">
          @if (registerForm.get('email')?.hasError('required')) {
            <p>Email is required.</p>
          } @else if (registerForm.get('email')?.hasError('email')) {
            <p>Please enter a valid email address.</p>
          }
        </div>
      }

      <label for="passwd" class="form-group">
        Password
        <input type="password" formControlName="passwd" />
      </label>
      <label for="firstName" class="form-group">
        First Name
        <input type="text" formControlName="firstName" />
      </label>
      <label for="surname" class="form-group">
        Surname
        <input type="text" formControlName="surname" />
      </label>

      <fieldset>
        <legend>Gender</legend>
        <label for="gender">
          <input type="radio" value="male" formControlName="gender" />
          Male
        </label>
        <label for="gender">
          <input type="radio" value="female" formControlName="gender" />
          Female
        </label>
        <label for="gender">
          <input type="radio" value="other" formControlName="gender" />
          Other
        </label>
      </fieldset>
      <label for="country" class="form-group">Country</label>
      <select formControlName="country">
        <option value="">Selecciona un país</option>
        <option value="es">Spain</option>
        <option value="fr">France</option>
        <option value="de">Germany</option>
        <option value="it">Italy</option>
        <option value="other">Others</option>
      </select>

      <label for="birthDateIso" class="form-group"
        >Birth Date
        <input type="date" formControlName="birthDateIso" />
      </label>
      <label for="bio" class="form-group"
        >Bio
        <textarea formControlName="bio"></textarea>
      </label>
      <label for="termsAcceptance" class="form-group">
        <input type="checkbox" formControlName="termsAcceptance" />
        Terms Acceptance....
      </label>
      <div class="form-group">
        <button type="submit" [disabled]="registerForm.invalid">Register</button>
      </div>
    </form>

    <pre>{{ registerForm.value | json }}</pre>
  `,
  styles: `
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .form-group {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
    }
    .error p {
      color: red;
      font-size: 0.8rem;
    }
  `,
})
export class Register {
  private readonly fb = inject(FormBuilder);

  protected readonly registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    passwd: ['', [Validators.required, Validators.minLength(6)]],
    firstName: [''],
    surname: [''],
    gender: [''],
    country: [''],
    birthDateIso: [''],
    bio: [''],
    termsAcceptance: [false, [Validators.requiredTrue]],
  });

  

  protected register(): void {

    console.log(this.registerForm);

    if (this.registerForm.invalid) {
      console.log('Form is invalid. Please correct the errors and try again.');
      return;
    }

    console.log('Registering user with data: ', this.registerForm.value);
  }
}
