// news.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { INews } from '../interfaces/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://servicodados.ibge.gov.br/api/v3/noticias?qtd=20'; 

  constructor(private http: HttpClient) {}

  getNews(): Observable<INews[]> {
    return this.http.get<INews[]>(this.apiUrl);
  }
}
