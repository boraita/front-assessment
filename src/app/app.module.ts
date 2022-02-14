import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountryModule } from './country/country.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CountryModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
