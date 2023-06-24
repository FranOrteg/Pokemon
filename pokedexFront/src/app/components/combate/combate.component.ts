import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { Movimiento } from 'src/app/interfaces/movimiento';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-combate',
  templateUrl: './combate.component.html',
  styleUrls: ['./combate.component.css']
})
export class CombateComponent {

  pokemon: Pokemon;
  @Input() selectePokemon: any
  pokemonGanador: string | null = null;
  selectemoves: any
  result: string;
  combateTerminado: boolean = false;


  constructor(
    private pokeService: PokemonService,
  ) {
    this.selectePokemon = this.pokeService.selectedPokemon
    this.result = ''
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
      urlImage: '',
      movimientos: [],
      rival: null
    }
  }


  iniciarCombate(): void {
    if (this.selectePokemon.length < 2) {
      console.log('Debes seleccionar al menos 2 Pokémon para iniciar el combate.');
      alert('Debes seleccionar al menos 2 Pokémon para iniciar el combate.')
      return;
    };

    if (!this.selectemoves || this.selectemoves.length === 0) {
      console.log('Debes seleccionar al menos 2 movimientos para iniciar el combate.');
      alert('Debes seleccionar al menos 2 movimientos para iniciar el combate.')
      return;
    }

    const pokemon1 = this.selectePokemon[0][0];
    const pokemon2 = this.selectePokemon[1][0];

    // Inicializar los puntos de salud actuales de los pokémon
    for (let turno = 1; turno <= 100; turno++) {
      let atacante: Pokemon;
      let defensor: Pokemon;

      if (turno % 2 === 1) {
        atacante = pokemon1;
        defensor = pokemon2;
      } else {
        atacante = pokemon2;
        defensor = pokemon1;
      }

      // Calcular daño
      const movimiento = this.selectemoves[0];

      const daño = this.calcularDaño(atacante, movimiento, defensor);
      console.log('Daño causado:', daño);
      defensor.puntosSaludActuales -= daño;

      console.log(`${atacante.nombre} ataca a ${defensor.nombre} y causa ${daño} puntos de daño.`);
      this.result += `${atacante.nombre} ataca a ${defensor.nombre} y causa ${daño} puntos de daño.\n`

      // Comprobar si el combate ha terminado
      if (pokemon1.puntosSaludActuales <= 0 || pokemon2.puntosSaludActuales <= 0) {
        break;
      }
    }

    if (pokemon1.puntosSaludActuales <= 0 && pokemon2.puntosSaludActuales <= 0) {
      console.log('¡El combate ha terminado en empate!');
      this.pokemonGanador = null

    } else if (pokemon1.puntosSaludActuales <= 0) {
      console.log(`${pokemon2.nombre} ha ganado el combate.`);
      this.pokemonGanador = pokemon2.nombre

    } else {
      console.log(`${pokemon1.nombre} ha ganado el combate.`);
      this.pokemonGanador = pokemon1.nombre
    }
    this.combateTerminado = true;
  };

  // Esta función calcula el daño que se inflige al pokemon rival
  calcularDaño(pokemonPropio: Pokemon, movimiento: Movimiento, rival: Pokemon): number {

    // Calculamos la efectividad del movimiento del pokemon 
    const efectividad = this.obtenerEfectividad(pokemonPropio.tipo, movimiento.poder, rival.tipo);

    // Generamos el número aleatorio entre 85 y 100
    const random = Math.floor(Math.random() * 16) + 85;

    // Calculamos el daño real infligido. utilizamos la formula proporcionada en el enunciado.
    const daño = Math.floor((((2 * pokemonPropio.nivel / 5 + 2) * pokemonPropio.puntosAtaqueBase * movimiento.poder / rival.puntosDefensaBase) / 50) * efectividad * random / 100)

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
  };

  // Esta función comprueba si se han seleccionado al menos 2 pokémon
  isSelectePokemon(): boolean {
    return this.selectePokemon.length !== 2
  };

  // Restablecer los valores necesarios para reiniciar el combate
  reset(): void {
    /* this.selectemoves = null;
    this.result = '';
    this.pokemonGanador = null;
    this.combateTerminado = false; */
    location.reload();
  };


  async selectedMoves(pokeId: number) {
    let move = await this.pokeService.getMoveById(pokeId)
    this.selectemoves = move
    console.log(this.selectemoves)
    return move
  };
}
