import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = environment.BASE_URL;
  private apiKey = environment.API_KEY;

  constructor(private http: HttpClient){}


  //Busca noticias con everithing
  public getEverything(query: string, from?: string){
    let url = `${this.baseUrl}/everything?q=${query}&apiKey=${this.apiKey}`;
    if (from) url += `&from=${from}`;

    return this.http.get(url);
  }

  //Noticias principales
  getTopHeadlines(country: string = 'us'){
    const url = `${this.baseUrl}/top-headlines?country=${country}&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  
    getSources() {
    const url = `${this.baseUrl}/sources?apiKey=${this.apiKey}`;
    return this.http.get(url);
  }


}
