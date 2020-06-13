import { Component,  Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent  {


  heros: any[] = [];
  url: string;
  @Input() items : any [] = [];
  constructor() { }


  seeHero(item : any){
      console.log(item);

  }

}
