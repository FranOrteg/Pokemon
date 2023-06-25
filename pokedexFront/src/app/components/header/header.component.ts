import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  createForm: FormGroup
  @Output() nameEmitted: EventEmitter<string>;
  @Output() typeEmitted: EventEmitter<string>;
  @Output() AllEmitted: EventEmitter<void>;
  @Output() FormEmitted: EventEmitter<string>;
  @Input() pokemons: any[];
  selectedType: string = '';
  arrPokemons: any[] = [];
  uniqueTypes: string[] = [];


  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) {
    this.pokemons = []
    this.FormEmitted = new EventEmitter
    this.nameEmitted = new EventEmitter
    this.typeEmitted = new EventEmitter
    this.AllEmitted = new EventEmitter
    this.createForm = new FormGroup({
      nombre: new FormControl('',
        [
          Validators.required
        ]),
      tipo: new FormControl('',
        [
          Validators.required
        ]),
      nivel: new FormControl('',
        [
          Validators.required
        ]),
      puntosSaludActuales: new FormControl('',
        [
          Validators.required
        ]),
      puntosSaludTotales: new FormControl('',
        [
          Validators.required
        ]),
      puntosAtaqueBase: new FormControl('',
        [
          Validators.required
        ]),
      puntosDefensaBase: new FormControl('',
        [
          Validators.required
        ]),
      puntosAtaqueEspecialBase: new FormControl('',
        [
          Validators.required
        ]),
      puntosVelocidadBase: new FormControl('',
        [
          Validators.required
        ]),
      urlImage: new FormControl('',
        [
          Validators.required
        ]),
    }, []);
  }

  // Emitimos el nombre del pokemon al componente padre
  getData(): void {
    console.log(this.createForm.value);
    this.nameEmitted.emit(this.createForm.value.nombre);
    this.createForm.reset()
  }

  // Emitimos el tipo del pokemon al componente padre
  getType(): void {
    const type = this.createForm.value.tipo;
    if (type) {
      this.selectedType = type;
      this.typeEmitted.emit(type);
    }
    this.createForm.reset();
  }

  // Emitimos todos los pokemons al componente padre
  getAll(): void {
    this.AllEmitted.emit();
    this.createForm.reset();
  }

  // Emitimos el formulario al componente padre
  onSubmit(): void {
    console.log(this.createForm.value)
    this.FormEmitted.emit(this.createForm.value);
    this.createForm.reset();
    this.router.navigate(['/pokedex'])

  }

  // Obtenemos todos los tipos de pokemon para el select
  async ngOnInit(): Promise<void> {
    this.arrPokemons = await this.pokemonService.GetAllPokemons();
    const uniqueTypes: string[] = [];
    for (const poke of this.arrPokemons) {
      if (poke.tipo && poke.tipo.length > 1) {
        const types = poke.tipo.split(',');
        for (const type of types) {
          if (!uniqueTypes.includes(type.trim())) {
            uniqueTypes.push(type.trim());
          }
        }
      } else if (poke.tipo) {
        if (!uniqueTypes.includes(poke.tipo.trim())) {
          uniqueTypes.push(poke.tipo.trim());
        }
      }
    }
    this.uniqueTypes = uniqueTypes;
  }

  // Validamos los campos del formulario
  checkError(control: string, validator: string) {
    return this.createForm.get(control)?.hasError(validator) && this.createForm.get(control)?.touched;
  }
}
