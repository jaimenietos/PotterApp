import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';

//Rutes
import{ ROUTES} from './app.routes'
import { from } from 'rxjs';
import { RouterModule } from '@angular/router';

//Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { CharactersComponent } from './components/characters/characters/characters.component';
import { CharacterDetailComponent } from './components/characters/character-detail/character-detail.component';
import { HousesComponent } from './components/houses/houses/houses.component';
import { HouseDetailComponent } from './components/houses/house-detail/house-detail.component';
import { SpellsComponent } from './components/spells/spells.component';
import { FilterMemberPipe } from './pipes/filter-member.pipe';
import { FormsModule}  from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingComponent,
    NavbarComponent,
    CardsComponent,
    CharactersComponent,
    CharacterDetailComponent,
    HousesComponent,
    HouseDetailComponent,
    SpellsComponent,
    FilterMemberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    NgxPaginationModule,
    RouterModule.forRoot(ROUTES,{useHash: true}),
    BrowserAnimationsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
