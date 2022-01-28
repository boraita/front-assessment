import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Country } from '../../models/country';
import { Observable } from 'rxjs';

@Injectable()
export class CountryService {
  constructor(private readonly http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get(
      environment.API_BASE_URL + '/country/city'
    ) as Observable<Country[]>;
  }
}
