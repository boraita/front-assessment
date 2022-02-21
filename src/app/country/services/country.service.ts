import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Country } from '../../models/country';

@Injectable()
export class CountryService {
  private countrySource = new BehaviorSubject<Country | null>(null);
  private selectedCountry$ = this.countrySource.asObservable();

  constructor(private readonly http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(environment.API_BASE_URL + '/country/city');
  }

  setCountry(country: Country): void {
    this.countrySource.next(country);
  }
  getSelectedCountry(): Observable<Country | null> {
    return this.selectedCountry$;
  }
}
