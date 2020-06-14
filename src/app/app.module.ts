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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { CharactersComponent } from './components/characters/characters/characters.component';
import { CharacterDetailComponent } from './components/characters/character-detail/character-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingComponent,
    NavbarComponent,
    CardsComponent,
    CharactersComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
