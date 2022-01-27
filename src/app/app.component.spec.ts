import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryService } from './services/country.service';
import { CountryServiceMock } from './shared/mocks/country-service.mock';
import { ShowCityComponent } from './show-city/show-city.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, CountryListComponent, ShowCityComponent],
      providers: [{ provide: CountryService, useClass: CountryServiceMock }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
