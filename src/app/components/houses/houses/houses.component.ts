import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PotterService } from 'src/app/services/potter.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html'
})
export class HousesComponent  {

  loading : boolean;
  p: number = 1;
  collection: any[] = [];
  constructor( private router:Router, private potter: PotterService) {
    this.loading = true;
    this.potter.getHouses().subscribe((data: any)=>{
      this.collection = data;
      this.loading = false;
    });
   }



  seeHouse(item : any){
    console.log(item);
    this.router.navigate(['/house',item._id]);
}

}
