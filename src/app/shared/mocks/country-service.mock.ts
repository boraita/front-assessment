import { Observable, of } from 'rxjs';
import { Country } from 'src/app/models/country';
import { CountryService } from '../../country/services/country.service';
import { countriesCity } from './country-by-capital-city';

export class CountryServiceMock implements Required<CountryService> {

  public getCountries(): Observable<Country[]> {
      return of(countriesCity);
  }
}
