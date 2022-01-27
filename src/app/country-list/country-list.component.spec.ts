import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { CountryService } from '../services/country.service';
import { CountryServiceMock } from '../shared/mocks/country-service.mock';
import { CountryListComponent } from './country-list.component';
import { Country } from '../models/country';

describe('CountryListComponent', () => {
  let component: CountryListComponent;
  let fixture: ComponentFixture<CountryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryListComponent],
      providers: [{ provide: CountryService, useClass: CountryServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should fill countryList variable', fakeAsync(() => {
    expect(component.countryList).toEqual([]);
    const countryService: CountryService = TestBed.inject(CountryService);
    const getCountryServiceSpy = jest.spyOn(countryService, 'getCountries');
    fixture.detectChanges();
    expect(getCountryServiceSpy).toHaveBeenCalledTimes(1);
    expect(component.countryList.length > 0).toBeTruthy();
  }));

  it('should emit a country', () => {
    const countrySelectedEmit = jest.spyOn(fixture.componentInstance.countrySelected, 'emit');
    fixture.componentInstance.countrySelected.emit({ city: 'Madrid', country: 'Spain' } as Country);
    fixture.detectChanges();

    expect(countrySelectedEmit).toHaveBeenCalledTimes(1);
    expect(component.countrySelected.emit).toHaveBeenCalledWith({ city: 'Madrid', country: 'Spain' });
  });
});
