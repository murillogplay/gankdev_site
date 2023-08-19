import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [ 
  { path: '', loadComponent: () => import('./components/pages/home/home.component').then(c => c.HomeComponent)},
  { path: 'news', loadComponent: () => import('./components/pages/news/news.component').then(c => c.NewsComponent)},
  { path: 'contact', loadComponent: () => import('./components/pages/contact/contact.component').then(c => c.ContactComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
