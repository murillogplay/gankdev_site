import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private router: Router){
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
