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

    return this.http.get(`everything?q=${query}&apiKey=${this.apiKey}`)
  }

  //Noticias principales
  getTopHeadlines(country: string = 'us'){
     return this.http.get(`top-headlines?country=${country}&apiKey=${this.apiKey}`);
  }

  
   /* getSources() {
    const url = `${this.baseUrl}/sources?apiKey=${this.apiKey}`;
    return this.http.get(url);
  }*/


}
