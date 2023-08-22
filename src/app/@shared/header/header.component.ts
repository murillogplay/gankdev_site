import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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

  showMenu = true
  
  isMobile = window.innerWidth <= 1024;

  constructor(
    private router: Router,
    public authService: AuthService){}  
    
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { outerWidth: number } }): void {
    this.isMobile = event.target.outerWidth <= 1024;  
    if(this.isMobile) this.closeMenu();
    else this.openMenu();

  }
  
  goHome(){
    this.router.navigate(['/']); 
    this.closeMenu();
  }

  goNews(){
    this.router.navigate(['/news']);
    this.closeMenu();
  } 
  goContact(){
    this.router.navigate(['/contact']);  
    this.closeMenu();
  }  

  closeMenu(){
    if(this.isMobile) this.showMenu = false;
  }

  openMenu(){
     this.showMenu = true; 
  }

  toogleMenu(){  
      this.showMenu=!this.showMenu; 
  }
}
