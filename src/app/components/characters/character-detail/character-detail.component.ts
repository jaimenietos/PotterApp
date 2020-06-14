import { Component } from '@angular/core';
import { PotterService } from 'src/app/services/potter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html'
})
export class CharacterDetailComponent  {

  character: any;
  loading : boolean;

  constructor( private router: ActivatedRoute, private potter: PotterService) {

    this.loading = true,
    this.router.params.subscribe( params => {
      this.getCharacter(params['id']);
    })
   }



   getCharacter(id: string){
    this.potter.getCharacter(id)
          .subscribe( data => {
            this.character = data;
            this.loading = false;
          })
}



}
