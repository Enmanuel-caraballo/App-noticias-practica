import { Component, Input, OnInit } from '@angular/core';
import { INews } from 'src/app/interfaces/news.interface';
import { NewsService } from '../../services/news-service';



@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss'],
  standalone: false,
})
export class MainNewsComponent  implements OnInit {
   
  public news: INews[] = [];
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() content: string = '';
  @Input() image: string = '';

  constructor(
    private readonly newsSrv: NewsService,
  ) { }

  ngOnInit() {
    this.newsSrv.getTopHeadlines('us').subscribe((data: any) =>{
      this.news = data.articles;
    })
  }

}
