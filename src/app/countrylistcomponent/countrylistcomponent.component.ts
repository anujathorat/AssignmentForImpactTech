import { Component, OnInit } from '@angular/core';
import { AlertService, UserService ,DataService, Country , State } from '../_services';

@Component({
  selector: 'app-countrylistcomponent',
  templateUrl: './countrylistcomponent.component.html',
  styleUrls: ['./countrylistcomponent.component.css'],
  providers: [DataService]
})
export class CountrylistcomponentComponent implements OnInit {

  selectedCountry:Country = new Country(0, 'India'); 
  countries: Country[];
  states: State[];

  constructor(private _dataService: DataService) {
    this.countries = this._dataService.getCountries();
    //this._dataService.getCountries().subscribe(data => this.countries = data);
  }

  ngOnInit() {
  }

  onSelect(countryid) {
    this.states = this._dataService.getStates().filter((item)=> item.countryid == countryid);
  }

}
