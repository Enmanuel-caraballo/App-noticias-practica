import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: false,
})
export class SelectComponent  implements OnInit {

  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl();

  constructor() {}

  ngOnInit() {}

  public onSelect(event: any){    
    this.control.setValue(event.detail.value);
    this.control.markAllAsTouched();
  }

}
