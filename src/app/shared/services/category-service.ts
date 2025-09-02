import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private selectedCategory = new BehaviorSubject<any>(null);
  selectedCategory$ = this.selectedCategory.asObservable();

  setItem(item:any){
    this.selectedCategory.next(item);
    
  }
}
