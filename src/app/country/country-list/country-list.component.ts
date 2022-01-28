import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Country } from '../../models/country';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit {
  @Output() countrySelected = new EventEmitter<Country>();
  countryList$!: Observable<Country[]>;

  constructor(private readonly countryService: CountryService) {}

  ngOnInit(): void {
    this.countryList$ = this.countryService
      .getCountries()
  }
  setCountry(country: Country) {
    this.countrySelected.emit(country);
  }
}
