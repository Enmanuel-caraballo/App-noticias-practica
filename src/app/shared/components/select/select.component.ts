import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CountriesService } from '../../services/countries-service';
import { Observable } from 'rxjs';
import { ICountry } from 'src/app/interfaces/country.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: false,
})
export class SelectComponent  implements OnInit {

  countries$!: Observable<ICountry[]>;

  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl();
  selectedCountry: string = '';
  

  constructor(private countriesService: CountriesService) {}


  ngOnInit() {
    this.countries$ = this.countriesService.getCountries();
  }

  public onSelect(event: any){
    this.control.setValue(event.detail.value);
    this.control.markAllAsTouched();
  }

 
 
  /* public onSelect(event: any){    
    this.control.setValue(event.detail.value);
    this.control.markAllAsTouched();

      <ion-select-option *ngFor="let country of countries$ | async" [value]="country.name">
    {{country.name}}  {{country.unicodeFlag}}
  </ion-select-option>
  }*/

}
