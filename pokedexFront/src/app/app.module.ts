import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { MovimientoComponent } from './components/movimiento/movimiento.component';
import { CombateComponent } from './components/combate/combate.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokeViewComponent } from './components/poke-view/poke-view.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    MovimientoComponent,
    CombateComponent,
    PokeViewComponent,
    PokedexComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PokemonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
