import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {

  arrPokemons: any[]

  constructor(
    private pokeService: PokemonService,
  ) {
    this.arrPokemons = []
  };


  async ngOnInit() {
    this.arrPokemons = await this.pokeService.GetAllPokemons()
    console.log(this.arrPokemons)
  }

  async getPokemons($event: string) {
    let nombre = $event
    console.log(($event));

    try {
      let response = await this.pokeService.getPokemonByName(nombre)
      console.log(response);

      this.arrPokemons = response
      console.log(this.arrPokemons)
    } catch (error) {
      console.log('error', error)
    }
  }

  async getPokemonType($event: string) {
    let type = $event
    try {
      let response = await this.pokeService.getPokemonByType(type)
      this.arrPokemons = response
    } catch (error) {
      console.log('error', error)
    }
  }

  async getAllPoke() {
    try {
      let response = await this.pokeService.GetAllPokemons()
      console.log('hola', response);
      this.arrPokemons = response
    } catch (error) {
      console.log('error', error)
    }
  }

  /* async pokeSelected(pokeId: number) {
    try {
      console.log(pokeId)
      let poke = await this.pokeService.getPokemonById(pokeId)
      this.pokemonSelected.push(poke)
      this.pokeData.setSelectPokemon(this.pokemonSelected)
      console.log(this.pokemonSelected);
    } catch (error) {
      console.log('error', error)
    }
  } */

  async createPokemon($event: any) {
    let data = $event
    try {
      await this.pokeService.RegisterPokemon(data)
      window.location.reload()
    } catch (error) {
      console.log('error', error)
    }
  }
}
