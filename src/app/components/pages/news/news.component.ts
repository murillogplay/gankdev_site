import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from './services/news.service';
import { Observable, catchError, map, mergeMap, throwError } from 'rxjs';
import { INews } from './interfaces/news.interface';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './news.component.html', 
  providers:[NewsService]
})
export class NewsComponent {
  newsList$!: Observable<INews[]>;
  constructor(
    private newsService: NewsService
  ){}
  ngOnInit(){
    this.newsList$ = this.newsService.getNews()
    .pipe(
      map(
        (data : any) => {
          console.log(data)
          return data.items
        }
      )
    )
    .pipe(
      catchError((err) => {
        return throwError(() => console.error(err));
      })
    );
  }
}
