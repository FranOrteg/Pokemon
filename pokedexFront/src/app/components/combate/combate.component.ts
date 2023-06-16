import { Component } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { MovimientoComponent } from '../movimiento/movimiento.component';

@Component({
  selector: 'app-combate',
  templateUrl: './combate.component.html',
  styleUrls: ['./combate.component.css']
})
export class CombateComponent {

  pokemon: Pokemon

  constructor() {
    this.pokemon = {
      nivel: 0,
      nombre: '',
      tipo: '',
      puntosSaludActuales: 0,
      puntosSaludTotales: 0,
      puntosAtaqueBase: 0,
      puntosDefensaBase: 0,
      puntosAtaqueEspecialBase: 0,
      puntosDefensaEspecialBase: 0,
      puntosVelocidadBase: 0,
      movimientos: [],
      rival: null
    }
  }
}

// Creamos instancias de los pokemon para simular un combate
const pokemon1 = new PokemonComponent();
pokemon1.nivel = 50;
pokemon1.nombre = 'Chori';
pokemon1.tipo = 'Agua';
pokemon1.puntosSaludActuales = 100;
pokemon1.puntosSaludTotales = 100;
pokemon1.puntosAtaqueBase = 70;
pokemon1.puntosDefensaBase = 50;
pokemon1.puntosAtaqueEspecialBase = 90;
pokemon1.puntosDefensaEspecialBase = 80;
pokemon1.puntosVelocidadBase = 120;
pokemon1.movimientos = [];

const pokemon2 = new PokemonComponent();
pokemon2.nivel = 45;
pokemon2.nombre = 'Jiggly';
pokemon2.tipo = 'Roca';
pokemon2.puntosSaludActuales = 120;
pokemon2.puntosSaludTotales = 120;
pokemon2.puntosAtaqueBase = 85;
pokemon2.puntosDefensaBase = 80;
pokemon2.puntosAtaqueEspecialBase = 100;
pokemon2.puntosDefensaEspecialBase = 90;
pokemon2.puntosVelocidadBase = 100;
pokemon2.movimientos = [];


// Asignamos los rivales
pokemon1.rival = pokemon2;
pokemon2.rival = pokemon1;


// Calcular daño
const movimiento = new MovimientoComponent();
movimiento.nombre = 'Movimiento1';
movimiento.poder = 80;

const daño = pokemon1.calcularDaño(pokemon1, movimiento, pokemon2);
console.log('Daño causado:', daño);

// Obtener efectividad
const efectividad = pokemon1.obtenerEfectividad(pokemon1.tipo, movimiento.poder, pokemon2.tipo);
console.log('efectividad', efectividad)

// Obtener el índice del tipo
const indiceTipoPropio = pokemon1.obtenerIndiceTipo(pokemon1.tipo);
const indiceTipoRival = pokemon2.obtenerIndiceTipo(pokemon2.tipo);
console.log('Índice del tipo:', indiceTipoPropio);
console.log('Índice del tipo:', indiceTipoRival);