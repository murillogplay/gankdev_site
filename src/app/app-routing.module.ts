import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [ 
  { path: 'home', loadComponent: () => import('./components/pages/home/home.component').then(c => c.HomeComponent)},
  { path: 'news', loadComponent: () => import('./components/pages/news/news.component').then(c => c.NewsComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
