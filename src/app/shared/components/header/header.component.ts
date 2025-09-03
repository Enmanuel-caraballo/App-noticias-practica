import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category-service';
import { NewsService } from '../../services/news-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent  implements OnInit {
  @Input() title: string = '';
  title2: string = '';
  constructor(private categorySrv: CategoryService, private newsSrv: NewsService) { }

  ngOnInit() {
      this.categorySrv.selectedCategory$.subscribe((category: string) => {
          this.title2 = category;
  });
  }

}
