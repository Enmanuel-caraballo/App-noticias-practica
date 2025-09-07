import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Menu {

  constructor (private http: HttpClient){}


  getMenu(): Observable<any>{
    return this.http.get('../assets/config/menu.json'); 
  }
    }

