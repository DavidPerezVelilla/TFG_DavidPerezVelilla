import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { LoginData } from 'src/app/shared/login-data';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private readonly authService: AuthService,
    private readonly router: Router) { }

  ngOnInit(): void {
  }

  login(loginData: LoginData) {
    this.authService
      .login(loginData)
      .then(() => this.router.navigate(['/dashboard']))
      .catch((e) => console.log(e.message));
  }

  loginWithGoogle() {
    this.authService
      .loginWithGoogle()
      .then(() => this.router.navigate(['/dashboard']))
      .catch((e) => console.log(e.message));
  }
}


