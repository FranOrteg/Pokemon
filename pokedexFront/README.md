# PokedexFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## PART 1

Se requiere un método que, al pasarle un Pokémon, el movimiento escogido del mismo y
su rival devuelva el cálculo del daño.

    - Creación de componentes: se han creado 3 componentes con la intención de reutilizarlos en un futuro en la implementación de otras funcionalidades del proyecto, estos componentes son: "pokemonComponent", "combateComponent", "movimientosComponent"

### PokemonComponent

En este componente se implementarán las siguientes funcionalidades:

    - Definición de las propiedades de los Pokémon.
    
    - Función que calculará el daño al usar un movimiento específico.
        - calcularDaño(){}
    
    - Función que calculará la efectividad del ataque en relación a la tabla proporcionada
        - obtenerEfectividad(){}

    - Función que calculará la posición en la tabla de efectividad
        - obtenerIndiceTipo(){}

### CombateComponent

En este componente se implementarán las siguientes funcionalidades:

    - Creamos las instancias que simalaran los pokemons para el combate.

    - Calculamos el daño.

    - Obtenemos el indice.

    - Obtenemos la posición de efectividad en la tabla 


### PART 3

Generar un API que mantenga el estado de una partida y permita representar un combate
Pokémon.

Se debe poder asignar 2 Pokémons adversarios y cada fase del combate, hasta que los PS del
Pokémon sean 0.

En esta parte no he tenido de realizar la lógica completa de la asignación de dos pokémons para el combate, teniendo solo la posibilidad de asignar un pokemon atacante y un pokemon rival.
