import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pokemon' },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: '**', redirectTo: '/pokemon' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
