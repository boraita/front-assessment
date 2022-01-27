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
    const divSelectCity = fixture.debugElement.query(By.css('.select-city'));
    expect(divSelectCity.nativeElement.textContent.trim()).toBe('Select a city');
  });

  it('should be shown capital Unknown', () => {
    component.country = { city: null, country: 'Spain' } as Country;
    fixture.detectChanges();
    const divSelectedCountry = fixture.debugElement.query(By.css('.capital-selected'));
    expect(divSelectedCountry.nativeElement.textContent.trim()).toBe('Country selected: Spain - Capital: Unknown');
  });

  it('should be shown capital from country selected', () => {
    component.country = { city: 'Madrid', country: 'Spain' } as Country;
    fixture.detectChanges();
    const divSelectedCountry = fixture.debugElement.query(By.css('.capital-selected'));
    expect(divSelectedCountry.nativeElement.textContent.trim()).toBe('Country selected: Spain - Capital: Madrid');
  });

});
