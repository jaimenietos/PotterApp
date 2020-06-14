import { Component } from '@angular/core';
import { PotterService } from 'src/app/services/potter.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html'
})
export class SpellsComponent   {


  loading: boolean;
  p: number = 1;
  collection: any[] = [];
  constructor(private potter: PotterService) {
    this.loading = true;
    this.potter.getSpells().subscribe((data: any) => {
      this.collection = data;
      this.loading = false;
    });
   }
  }



