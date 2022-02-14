import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryService } from '../services/country.service';
import { CountryListComponent } from './country-list.component';
import { Country } from '../../models/country';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

jest.mock('../services/country.service');

describe('CountryListComponent', () => {
  let component: CountryListComponent;
  let fixture: ComponentFixture<CountryListComponent>;
  let countryService: CountryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryListComponent],
      providers: [CountryService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListComponent);
    component = fixture.componentInstance;
    countryService = TestBed.inject(CountryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have call to country service', () => {
    const getCountryServiceSpy = jest.spyOn(countryService, 'getCountries');
    expect(getCountryServiceSpy).toHaveBeenCalled();
  });

  it('should select a country and use set contry service', () => {
    const setCountryServiceSpy = jest.spyOn(countryService, 'setCountry');
    component.countryList$ = of([
      {
        country: 'Afghanistan',
        city: 'Kabul',
      },
    ]);
    fixture.detectChanges();
    const countryBtns = fixture.debugElement.query(
      By.css('a.btn')
    ).nativeElement;
    countryBtns.click();
    expect(setCountryServiceSpy).toHaveBeenCalled();
  });
});
