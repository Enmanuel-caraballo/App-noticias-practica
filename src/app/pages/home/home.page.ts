import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INews } from 'src/app/interfaces/news.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { Http } from 'src/app/shared/services/http/http';
import { NewsService } from 'src/app/shared/services/news-service';
import { StorageService } from 'src/app/shared/services/storage';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  public users: IUser[] = [];
  public news: INews[] = [];
  constructor(
    private readonly newsService: NewsService, 
    private readonly router: Router,
     private httpSrv: Http) { }

  async ngOnInit(){

   // this.news = await this.httpSrv.get<INews[]>(environment.BASE_URL);
    

    this.newsService.getEverything('sports').subscribe(data => {
  console.log(data);
   });

  this.newsService.getTopHeadlines('us').subscribe(data => {
  console.log(data);
  });
}

  

  /*public goToDetail(id: IUser['uuid']){
    this.router.navigate(['/detail', id])

  }*/

}
