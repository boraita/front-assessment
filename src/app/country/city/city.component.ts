import { Component, Input } from '@angular/core';
import { Country } from '../../models/country';
import { CountryService } from '../services/country.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class ShowCityComponent {
  constructor(private readonly countryService: CountryService) {}

  getCountry(): Observable<Country> {
    return this.countryService.selectedCountry$;
  }
}
