import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LoginButtonComponent, UserHeaderComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(
    private router: Router,
    public authService: AuthService){
  } 

  goHome(){
    this.router.navigate(['/']); 
  }

  goNews(){
    this.router.navigate(['/news']); 
  } 
  goContact(){
    this.router.navigate(['/contact']); 
  } 
}
