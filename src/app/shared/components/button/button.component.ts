import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone:false,
})
export class ButtonComponent  implements OnInit {
  @Input() type: string = '';
  @Input() color: string = 'primary';
  @Input() value: string = '';
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit() {}

}
