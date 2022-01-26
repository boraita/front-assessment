import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Country } from '../models/country';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit, OnDestroy {
  countryList: Country[] = [];
  subscriptions!: Subscription;

  constructor(private readonly countryService: CountryService) {}

  ngOnInit(): void {
    this.subscriptions = this.countryService
      .getCountries()
      .subscribe((contries) => (this.countryList = contries));
  }
  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
