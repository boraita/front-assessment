import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Country } from '../../models/country';
import { CountryService } from '../services/country.service';
import { ShowCityComponent } from './city.component';

jest.mock('./../services/country.service');

describe('ShowCityComponent', () => {
  let component: ShowCityComponent;
  let fixture: ComponentFixture<ShowCityComponent>;
  let countryService: CountryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowCityComponent],
      providers: [CountryService],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowCityComponent);
    component = fixture.componentInstance;
    countryService = TestBed.inject(CountryService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('country should be undefined', () => {
    expect(component.getCountry()).toBeUndefined();
    const divSelectCity = fixture.debugElement.query(By.css('.select-country'));
    expect(divSelectCity.nativeElement.textContent.trim()).toBe(
      'Select a country'
    );
  });

  it('should be shown capital Unknown', () => {
    jest
      .spyOn(countryService, 'getSelectedCountry')
      .mockReturnValue(of({ country: 'Afghanistan', city: null }));
    fixture.detectChanges();
    const divSelectedCountry = fixture.debugElement.query(By.css('.city-name'));
    expect(divSelectedCountry.nativeElement.textContent.trim()).toBe(
      'Capital  Unknown'
    );
  });

  it('should be shown capital from country selected', () => {
    jest.spyOn(countryService, 'getSelectedCountry').mockReturnValue(
      of({
        country: 'Spain',
        city: 'Madrid',
      } as Country)
    );
    fixture.detectChanges();
    const divSelectedCountry = fixture.debugElement.query(By.css('.city-name'));
    expect(divSelectedCountry.nativeElement.textContent.trim()).toBe(
      'Capital  Madrid'
    );
  });

  it('should display Select a country (Snapshot)', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should display a capital from input country value (Snapshot)', () => {
    jest.spyOn(countryService, 'getSelectedCountry').mockReturnValue(
      of({
        country: 'Spain',
        city: 'Madrid',
      } as Country)
    );
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
