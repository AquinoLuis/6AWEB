import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup;
  isSubmitted = false;
  submittedData: any = null;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      gender: ['male', Validators.required],
      address: [''],
      birthDate: ['', Validators.required],
      skillLevel: [5]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.registerForm.valid) {
      this.submittedData = this.registerForm.value;
    }
  }
}
