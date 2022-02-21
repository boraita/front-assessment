import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryComponent } from './country.component';
import { CountryService } from './services/country.service';
import { ShowCityComponent } from './city/city.component';

@NgModule({
  declarations: [CountryListComponent, ShowCityComponent, CountryComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [CountryService],
  exports: [CountryComponent],
})
export class CountryModule {}
