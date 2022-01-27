import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ShowCityComponent } from './show-city.component';
import { Country } from '../models/country';

describe('ShowCityComponent', () => {
  let component: ShowCityComponent;
  let fixture: ComponentFixture<ShowCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowCityComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('country should be undefined', () => {
    expect(component.country).toBeUndefined();
    const divSelectCity = fixture.debugElement.query(By.css('.select-country'));
    expect(divSelectCity.nativeElement.textContent.trim()).toBe('Select a country');
  });

  it('should be shown capital Unknown', () => {
    component.country = { city: null, country: 'Spain' } as Country;
    fixture.detectChanges();
    const divSelectedCountry = fixture.debugElement.query(By.css('.city-name'));
    expect(divSelectedCountry.nativeElement.textContent.trim()).toBe('Capital  Unknown');
  });

  it('should be shown capital from country selected', () => {
    component.country = { city: 'Madrid', country: 'Spain' } as Country;
    fixture.detectChanges();
    const divSelectedCountry = fixture.debugElement.query(By.css('.city-name'));
    expect(divSelectedCountry.nativeElement.textContent.trim()).toBe('Capital  Madrid');
  });

  it('should display Select a country', () => {
    expect(fixture).toMatchSnapshot();
  });
  
  it('should display a capital from input country value', () => {
    component.country = { city: 'Madrid', country: 'Spain' } as Country;
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });


});
