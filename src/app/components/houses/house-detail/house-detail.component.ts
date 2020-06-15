import { Component } from '@angular/core';
import { PotterService } from 'src/app/services/potter.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html'
})
export class HouseDetailComponent  {

  house: any ;
  loading : boolean;
  p: number = 1;
  filterPost = '';
  constructor( private routerC:Router,private router: ActivatedRoute, private potter: PotterService) {
    this.loading = true,
    this.router.params.subscribe( params => {
      this.getHouse(params['id']);
    })
   }

   getHouse(id: string){
    this.potter.getHouse(id)
          .subscribe( data => {
            this.house = data[0];
            this.loading = false;
          })
}

seeCharacter(item : any){
  console.log(item);
  this.routerC.navigate(['/character',item._id]);
}

}
