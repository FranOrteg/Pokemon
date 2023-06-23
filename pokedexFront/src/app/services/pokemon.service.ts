import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = 'http://localhost:3000'
  selectedPokemon: any[]

  constructor(private httpClient: HttpClient) {
    this.selectedPokemon = []
  }


  GetAllPokemons() {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/pokemon`)
    )
  }

  getPokemonByName(pName: string) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/pokemon/search/${pName}`)
    )
  }

  getPokemonByType(pType: string) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/pokemon/type/${pType}`)
    )
  }

  getPokemonById(pId: number) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/pokemon/${pId}`)
    )
  }

  RegisterPokemon(formulario: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/pokemon/create`, formulario)
    )
  }

  setSelectPokemon(pokemon: any) {
    this.selectedPokemon = pokemon
  }

  getPokeBaseAndMoves(pid: number) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/movimientos/pokemove/${pid}`)
    )
  };

  registerMoves(formulario: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/movimientos`, formulario)
    )
  }

  getMoveById(pId: number) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/movimientos/${pId}`)
    )
  }

}
