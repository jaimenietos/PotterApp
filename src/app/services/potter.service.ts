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

    const url = `${environment.apiUrl}${query}${environment.apiKey}`;
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

   getCharacter(id: string){

    return  this.getQuery(`characters/${id}?`)
                 .pipe( map( data => data));
   }

   getHouses(){

    return  this.getQuery('houses?')
                 .pipe( map( data => data));
   }

   getHouse(id: string){

    return  this.getQuery(`houses/${id}?`)
                 .pipe( map( data => data));
   }

}
