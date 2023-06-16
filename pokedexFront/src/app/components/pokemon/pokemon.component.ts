import { Component } from '@angular/core';
import { MovimientoComponent } from '../movimiento/movimiento.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

/* Definimos las propiedades de los pokemon:
  - 'nivel', 'nombre', 'tipo'... son variables que almacenan información sobre el pokemon.
  - 'movimientos' es un array de objetos de tipo 'MovimientoComponent' que representan los movimientos de los pokemon.
  - 'rival' es una variable que almacena al pokemon rival. puede ser Pokemon o null.   */
export class PokemonComponent {
  nivel: number;
  nombre: string;
  tipo: string;
  puntosSaludActuales: number;
  puntosSaludTotales: number;
  puntosAtaqueBase: number;
  puntosDefensaBase: number;
  puntosAtaqueEspecialBase: number;
  puntosDefensaEspecialBase: number;
  puntosVelocidadBase: number;
  movimientos: MovimientoComponent[];
  rival: PokemonComponent | null


  constructor() {
    this.nivel = 0;
    this.nombre = '';
    this.tipo = '';
    this.puntosSaludActuales = 0;
    this.puntosSaludTotales = 0;
    this.puntosAtaqueBase = 0;
    this.puntosDefensaBase = 0;
    this.puntosAtaqueEspecialBase = 0;
    this.puntosDefensaEspecialBase = 0;
    this.puntosVelocidadBase = 0;
    this.movimientos = [];
    this.rival = null
  }

  // Calcular el daño al usar un movimiento especifico.
  // Como ponia en el enunciado del ejercicio este recibe, un pokemon, un movimiento y el pokemon rival

  calcularDaño(pokemonPropio: PokemonComponent, movimiento: MovimientoComponent, rival: PokemonComponent): number {

    // Calculamos la efectividad del movimiento del pokemon 
    const efectividad = this.obtenerEfectividad(pokemonPropio.tipo, movimiento.poder, rival.tipo);

    // Generamos el número aleatorio entre 85 y 100
    const random = Math.floor(Math.random() * 16) + 85;

    // Calculamos el daño real infligido. utilizamos la formula proporcionada en el enunciado.
    const daño = Math.floor((((2 * this.nivel / 5 + 2) * this.puntosAtaqueBase * movimiento.poder / rival.puntosDefensaBase) / 50) * efectividad * random / 100)


    return daño
  }

  // en esta función obtenemos la efectividad del ataque en relación con la tabla proporcionada en el enunciado.

  obtenerEfectividad(tipoPropio: string, tipoAtaque: number, tipoOponente: string): number {

    // Generamos una matríz con la tabla
    const efectividadTabla = [
      [0.5, 0.5, 1, 1, 0.5, 1, 0.5, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1],
      [1, 0.5, 1, 0.5, 1, 1, 2, 1, 1, 1, 1, 0.5, 1, 2, 1, 2, 1, 1],
      [0.5, 1, 1, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 1, 2, 2, 1, 2, 1, 0.5, 0.5],
      [0.5, 1, 1, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 0, 1, 2],
      [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 2, 1, 0.5, 1, 1, 1],
      [2, 0.5, 2, 0.5, 1, 1, 0.5, 1, 2, 1, 1, 2, 1, 0.5, 1, 1, 1, 1],
      [0.5, 1, 1, 2, 1, 1, 0.5, 1, 1, 2, 1, 1, 1, 1, 2, 1, 0.5, 1],
      [0.5, 0.5, 1, 2, 1, 1, 0.5, 1, 0.5, 1, 1, 2, 1, 1, 1, 2, 1, 2],
      [2, 1, 0.5, 1, 1, 0, 1, 0.5, 2, 1, 2, 1, 0.5, 2, 2, 1, 0.5, 0.5],
      [0.5, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1],
      [0.5, 2, 0.5, 0.5, 1, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 2, 1, 2, 0.5, 0.5],
      [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 1, 0, 1, 2, 1],
      [0.5, 1, 2, 1, 1, 1, 2, 1, 2, 0.5, 1, 1, 1, 1, 1, 0.5, 1, 2],
      [1, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 1, 1, 2, 1, 0.5, 1, 1, 1],
      [2, 1, 0.5, 1, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 2, 1, 1, 2, 0],
      [0, 1, 1, 1, 1, 0.5, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 1],
      [0.5, 1, 2, 1, 0.5, 1, 1, 1, 1, 2, 1, 2, 1, 0.5, 1, 1, 1, 1]
    ]

    // Obtener el indice del pokemon propio y del tipo del oponen te en la matriz
    // Aqui obtenemos el tipo de pokemon y buscaremos su posición en la matriz
    const indiceTipoPropio = this.obtenerIndiceTipo(tipoPropio);
    const indiceTipoOponente = this.obtenerIndiceTipo(tipoOponente);

    // Obtener el valor de la efectividad de la matriz utilizando los índices
    const efectividad = efectividadTabla[indiceTipoPropio][indiceTipoOponente]

    console.log(efectividad);

    return efectividad
  }

  // Esta función recibe un tipo de pokemon como una cadena de texto y devuelve el indice correspondiente en la matriz

  obtenerIndiceTipo(tipo: string) {

    // Diferentes tipos segun la tabla
    const tipos = ['Acero', 'Agua', 'Bicho', 'Dragon', 'Electrico', 'Fantasma', 'Fuego', 'Hada', 'Hielo', 'Lucha', 'Normal', 'Planta', 'Psiquico', 'Roca', 'Siniestro', 'Tierra', 'Veneno', 'Volador']

    // verificamos si el valor esta en el array
    const indice = tipos.indexOf(tipo)
    if (indice === -1) {
      console.log('Valor no valido')
    }
    return indice
  }

}
