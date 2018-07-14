import { Injectable } from '@angular/core';
import { Country } from './country';
import { State } from './state';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class DataService {
  getCountries() {
    return [
     new Country(1, 'Cyprus' ),
     new Country(2, 'India' ),
     new Country(3, 'Australia' )
    ];
  }

  /*public getCountries(): Observable<any> {
    console.log('getCountries');

    const apiUrl = '';
    return this.httpClient.get(apiUrl);
      // .map((res: any) => {
      //   const data = res.json();
      //   return data;
      // });
  }*/
  
  getStates() {
   return [
     new State(1, 1, 'Limassol' ),
     new State(2, 1, 'Nicosia' ),
     new State(3, 1, 'Larnaca'),
     new State(4, 1, 'Paphos'),
     new State(5, 2, 'Gujarat' ),
     new State(6, 2, 'Goa'),
     new State(7, 2, 'Punjab' ),
     new State(8, 3, 'Queensland' ),
     new State(9, 3, 'South Australia' ),
     new State(10, 3, 'Tasmania')
    ];
  }
}
