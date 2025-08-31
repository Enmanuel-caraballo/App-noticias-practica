import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ICountry } from 'src/app/interfaces/country.interface';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  
  private apiUrl = 'https://countriesnow.space/api/v0.1/countries/flag/unicode';

  constructor(private http: HttpClient){ }

      getCountries(): Observable<ICountry[]> {
        return this.http.get<{data: ICountry[]}>(this.apiUrl).pipe(
          map(response => response.data)
        );
    }
}
