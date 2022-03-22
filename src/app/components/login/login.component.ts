import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private token: String = '';
  public showAlert: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLogin(form: NgForm) {
    this.authService
      .login(form.value.email, form.value.password)
      .subscribe((token) => {
        this.token = token;
      });

    // Added a small timeout to deal with CORS issues product of the server
    setTimeout(() => {
      if (this.token !== '' && this.token !== undefined) {
        this.authService.authenticateUser();
        this.router.navigate(['/users']);
      } else {
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 2500);
      }

      form.reset();
    }, 500);
  }
}
