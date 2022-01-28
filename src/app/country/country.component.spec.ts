import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryServiceMock } from '../shared/mocks/country-service.mock';
import { CountryComponent } from './country.component';
import { CountryService } from './services/country.service';
import { CountryListComponent } from './country-list/country-list.component';
import { ShowCityComponent } from './show-city/show-city.component';

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryComponent, CountryListComponent, ShowCityComponent],
      providers: [{ provide: CountryService, useClass: CountryServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
