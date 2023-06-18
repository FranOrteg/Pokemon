import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchForm: FormGroup
  @Output() nameEmitted: EventEmitter<string>
  @Output() typeEmitted: EventEmitter<string>
  @Output() AllEmitted: EventEmitter<void>
  @Output() FormEmitted: EventEmitter<string>
  @Input() pokemons: any[]


  constructor(private router: Router) {
    this.pokemons = []
    this.FormEmitted = new EventEmitter
    this.nameEmitted = new EventEmitter
    this.typeEmitted = new EventEmitter
    this.AllEmitted = new EventEmitter
    this.searchForm = new FormGroup({
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

  getData(): void {
    console.log(this.searchForm.value);
    this.nameEmitted.emit(this.searchForm.value.nombre);
    this.searchForm.reset()
  }

  getType(): void {
    const type = this.searchForm.value.tipo;
    if (type) {
      this.typeEmitted.emit(type);
      this.searchForm.reset()
    }
  }

  getAll(): void {
    this.AllEmitted.emit();
    this.searchForm.reset();
  }

  onSubmit(): void {
    console.log(this.searchForm.value)
    this.FormEmitted.emit(this.searchForm.value);
    this.searchForm.reset();
    this.router.navigate(['/pokedex'])

  }

  getUniqueTypes(pokemons: any[]): string[] {
    const uniqueTypes: string[] = [];
    for (const pokemon of pokemons) {
      if (!uniqueTypes.includes(pokemon.tipo)) {
        uniqueTypes.push(pokemon.tipo);
      }
    }
    return uniqueTypes;
  }



}
