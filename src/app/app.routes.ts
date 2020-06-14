import { Routes} from  '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters/characters.component';
import { CharacterDetailComponent } from './components/characters/character-detail/character-detail.component';

export const ROUTES: Routes =[
  { path:'home', component: HomeComponent},
  { path:'characters', component: CharactersComponent},
  { path:'character/:id', component: CharacterDetailComponent},
  { path:'', pathMatch: 'full', redirectTo:'home'},
  { path:'**', pathMatch: 'full', redirectTo:'home'}


];
