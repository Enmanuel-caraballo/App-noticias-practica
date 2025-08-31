import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss'],
  standalone: false,
})
export class CardComponentComponent  implements OnInit {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() content: string = '';
  @Input() image: string = '';


  
  constructor() { }

  ngOnInit() {}

}
