import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { MovimientoComponent } from './components/movimiento/movimiento.component';
import { CombateComponent } from './components/combate/combate.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    MovimientoComponent,
    CombateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
