import { FormControl } from '@angular/forms';
import { Menu } from './../../providers/menu';
import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../services/category-service';





@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: false,
})
export class ListComponent  implements OnInit {

  @Input() control: FormControl = new FormControl();

 menu: { title: string; value: string }[] = [];


  constructor(private menuPrv: Menu, private categorySrv: CategoryService) { } 

  ngOnInit() {
    this.menuPrv.getMenu().subscribe(data => {
      this.menu = data;
    });
}

  

 public onItemClick(item: any){
  
  this.categorySrv.setItem(item);
  //console.log(item);
  
  
 }
}