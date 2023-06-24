import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-view',
  templateUrl: './poke-view.component.html',
  styleUrls: ['./poke-view.component.css']
})
export class PokeViewComponent {

  pokemon!: Pokemon | any
  moveForm: FormGroup

  constructor(
    private activedRoute: ActivatedRoute,
    private pokeService: PokemonService
  ) {
    this.moveForm = new FormGroup({
      ataque: new FormControl('',
        [
          Validators.required
        ]),
      poder: new FormControl('',
        [
          Validators.required
        ]),
    }, []);
  }


  ngOnInit(): void {
    this.activedRoute.params.subscribe(async (params: any) => {
      let id = params.id
      this.pokemon = await this.pokeService.getPokeMoveJoin(id)
      console.log(this.pokemon);
    })
  }

  async onSubmit() {
    console.log(this.pokemon);
    const data = this.moveForm.value
    try {
      const response = await this.pokeService.registerMoves(data)
      console.log(response);
      this.moveForm.reset()
    } catch (error) {
      console.log('error', error);
    }
  }
}
