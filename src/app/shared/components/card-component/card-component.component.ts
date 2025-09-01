import { Component, Input, OnInit } from '@angular/core';
import { Http } from '../../services/http/http';
import { INews } from 'src/app/interfaces/news.interface';
import { environment } from 'src/environments/environment';
import { NewsService } from '../../services/news-service';


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

  
  
  constructor(private readonly httpSrv: Http,
    private readonly newsSrv: NewsService
  ) {}
  async ngOnInit(){
    this.newsSrv.getEverything('sports').subscribe((response: any) => {
    this.news = response.articles;

      });  
  }

}