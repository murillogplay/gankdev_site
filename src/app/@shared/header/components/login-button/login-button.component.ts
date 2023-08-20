import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-button.component.html',
  providers: [AuthService]
})
export class LoginButtonComponent {
  constructor(
    public authService: AuthService
  ){}

  login(){
    this.authService.loginWithRedirect()
  }

}
