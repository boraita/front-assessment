import { Component, Input } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-show-city',
  templateUrl: './show-city.component.html',
  styleUrls: ['./show-city.component.css'],
})
export class ShowCityComponent {
  @Input() country!: Country;
}
