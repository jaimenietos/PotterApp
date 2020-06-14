import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PotterService {

  constructor( private http: HttpClient) { }


  getQuery( query: string){

    const url = `${environment.servicioApi}${query}${environment.apiKey}`;
    return this.http.get(url);
  }

  getSpells(){

   return  this.getQuery('spells?')
                .pipe( map( data => data));
  }

  getCharacters(){

    return  this.getQuery('characters?')
                 .pipe( map( data => data));
   }

   getCharacter(_id: string){

    return  this.getQuery(`characters/${_id}?`)
                 .pipe( map( data => data));
   }

   getHouses(){

    return  this.getQuery('houses?')
                 .pipe( map( data => data));
   }

   getHouse(_id: string){

    return  this.getQuery(`houses/${_id}?`)
                 .pipe( map( data => data));
   }

}
