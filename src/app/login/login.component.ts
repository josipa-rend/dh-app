import { map } from 'rxjs/operators';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { containsDigitValidator, emailValidator } from '../_helpers/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required,  emailValidator()]), //Validators.email,
    password: new FormControl('', [Validators.required, Validators.minLength(6), containsDigitValidator()]),
  });

  constructor(private authService: AuthService, private router: Router) { }

  submitForm() {
    if (this.loginForm.invalid) {
      const alerts = Array.from(document.getElementsByClassName('alert'));
      alerts.forEach(element => element.removeAttribute("hidden"));
      return;
    }

    this.authService.login(this.loginForm?.get('email')?.value!, this.loginForm.get('password')?.value!);
  }

  ngOnInit(): void {
  }

}
