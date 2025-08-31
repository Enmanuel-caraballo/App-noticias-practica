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

  /*    this.countriesService.getCountries().subscribe({
      next: (response) =>{
        this.countries = response.data;
      },
      error: (err) =>{
        console.error('Error al cargar los paises')
      }
    });
     constructor(private countriesService: CountriesService) {}
       countries: any[] = [];*/
}
