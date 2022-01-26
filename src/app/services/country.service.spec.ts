import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from './../../environments/environment';
import { countriesCity } from './country-by-capital-city';
import { CountryService } from './country.service';

describe('CountryService', () => {
  let service: CountryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CountryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('country service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getCountries', (done) => {
    service.getCountries().subscribe((measurement) => {
      expect(measurement).toEqual(countriesCity);
      done();
    });

    const mockReq = httpMock.expectOne(`${environment.API_BASE_URL}/country/city`);
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(countriesCity);

    httpMock.verify();
  });
});
