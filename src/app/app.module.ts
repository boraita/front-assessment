import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import { ShowCityComponent } from './show-city/show-city.component';

@NgModule({
  declarations: [AppComponent, CountryListComponent, ShowCityComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
