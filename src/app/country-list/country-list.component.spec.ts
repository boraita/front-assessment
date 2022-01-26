import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { CountryService } from '../services/country.service';
import { CountryServiceMock } from '../shared/mocks/country-service.mock';
import { CountryListComponent } from './country-list.component';

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
});
