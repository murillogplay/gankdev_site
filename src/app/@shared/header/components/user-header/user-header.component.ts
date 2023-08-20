import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-header.component.html',
  providers:[AuthService]
})
export class UserHeaderComponent {
  constructor(
    public authService: AuthService
  ){}



}
