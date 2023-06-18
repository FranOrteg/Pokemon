# Pokemon

Pokémon Battle Simulator

Este proyecto es un simulador de batallas de Pokémon desarrollado con Angular, y Express de Node.js, también se ha utilizado una base de datos relacionales para la gestión de estos mismos para una prueba técnica. 

Permite seleccionar dos Pokémon y simular una batalla en la que los Pokémon se atacan entre sí hasta que uno de ellos se queda sin puntos de salud. 
El resultado de la batalla, es decir, el Pokémon ganador, se muestra en el navegador y en el componente combate.

# Instalación

Para ejecutar el proyecto de forma local, sigue estos pasos:

Clona este repositorio en tu máquina local o descárgalo como archivo ZIP.

Abre una terminal en la carpeta raíz del proyecto se encuentre una carperta con la parte del Cliente y otra con la del Servidor.

En la parte del CLIENTE (PokedexFront):

Para esta Parte tendremos que tener instalado DOCKERS para correr la base de datos MySQL

Entra la carpeta del cliente y Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```
npm install
```

Una vez que se hayan instalado las dependencias, ejecuta el siguiente comando para iniciar la aplicación:

```
npm start
```
Y el comando para levantar el servidor:

```
ng serve
```
 
Abre tu navegador web y ve a http://localhost:4200/pokedex para ver la aplicación en funcionamiento.

En la parte del SERVIDOR (PokedexBack):

Entra en la carpeta del Servidor y ejecuta los siguientes comandos:

Para inicializar la base de datos:

```
npm run database-start
```
Para inicializar el archivo DUMP.sql sobre el que se ha costruido el proyecto:

```
npm run database-dump
```

Para restaurar la Base de datos:

```
npm run database-restore
```

Para levantar el servidor:

```
npm run dev
```

# Uso

En la página de inicio, se muestran los todos Pokémon disponibles para seleccionar.

En el menu de navegación del header podemos tanto buscar los pokemons semanticamente como filtrarlos por tipo.

Este menu en el botón de create desplegara un offCanvas donde podremos crear un nuevo pokemon.

Pulsando en la imagen de cada pokémon nos llevara a la vista de ese pokemon en particular donde crearemos sus movimientos

Puedes seleccionar al menos dos Pokémon haciendo clic en ellos. 

Los Pokémon seleccionados aparecerán en la parte inferior de la página.

Una vez que hayas seleccionado al menos dos Pokémon, 

haz clic en el botón "Iniciar Combate" para simular la batalla.

La batalla se desarrollará en la consola y el resultado, es decir, el Pokémon ganador, se mostrará en la página y en la pantalla.







