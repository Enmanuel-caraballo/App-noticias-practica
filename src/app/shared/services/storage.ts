import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(){

  }

  set(key: string, data: any): void{
    localStorage.setItem(key, JSON.stringify(data));
  }
  get<T>(key: string): T | null{
    const data = localStorage.getItem(key);
    if(!data){
      return null;
    }
       return JSON.parse(data) as T;
  }
  
}
