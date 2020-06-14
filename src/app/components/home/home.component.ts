import { Component, OnInit } from '@angular/core';
import { PotterService } from 'src/app/services/potter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {



  spells: any[] = [];
  loading : boolean;
  p: number = 1;
  collection: any[] = [];
  constructor( private potter: PotterService) {

    this.loading = true;
    this.potter.getSpells().subscribe((data: any)=>{
      this.spells = data;
      this.collection = data;
      this.loading = false;
    });
   }

}
