import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { ShowCityComponent } from './show-city/show-city.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './services/country.service';
import { CountryComponent } from './country.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CountryListComponent, ShowCityComponent, CountryComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: CountryComponent,
      },
    ]),
  ],
  providers: [CountryService],
})
export class CountryModule {}
