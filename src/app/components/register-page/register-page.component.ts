import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { LoginData } from 'src/app/shared/login-data';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  register(data: LoginData) {
    this.authService
      .register(data)
      .then(() => this.router.navigate(['/login']))
      .catch((e) => console.log(e.message));
  }

}
