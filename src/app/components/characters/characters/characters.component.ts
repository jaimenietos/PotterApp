import { Component } from '@angular/core';
import { PotterService } from 'src/app/services/potter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent  {


  loading : boolean;
  p: number = 1;
  collection: any[] = [];
  constructor(private router:Router, private potter: PotterService) {
    this.loading = true;
    this.potter.getCharacters().subscribe((data: any)=>{
      this.collection = data;
      this.loading = false;
    });
  }

  seeCharacter(item : any){
    console.log(item);
    this.router.navigate(['/character',item._id]);
}



}
