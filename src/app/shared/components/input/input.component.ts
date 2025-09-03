import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: false,
})
export class InputComponent  implements OnInit {
  @Input() type: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl();

  public hasError = false;
  constructor() {}

  ngOnInit() {}

  public onType(event: any){

      if(this.control.errors){
        this.hasError = true;
      }else{
        this.hasError = false;
      }

       this.control.setValue(event.target.value);

       
       
  }

}
