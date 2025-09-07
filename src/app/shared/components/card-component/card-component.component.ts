import { Component, Input, OnInit } from '@angular/core';
import { INews } from 'src/app/interfaces/news.interface';
import { NewsService } from '../../services/news-service';
import { CategoryService } from '../../services/category-service';


@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss'],
  standalone: false,
})
export class CardComponentComponent  implements OnInit {
    public news: INews[] = [];

  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() content: string = '';
  @Input() image: string = '';

  
  
  constructor(
    private readonly newsSrv: NewsService,
    private readonly categorySrv: CategoryService,
  ) {}
   ngOnInit(){



    
  this.categorySrv.selectedCategory$.subscribe((category: string) => {
    
    if(!category){
      category = 'sports';
      this.newsSrv.getEverything(category).subscribe((response: any) => {
      this.news = response.articles;
    });
    }

    this.newsSrv.getEverything(category).subscribe((response: any) => {
      this.news = response.articles;
    });
  });

    
  }

}