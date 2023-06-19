const router = require('express').Router();

// Pokemons
router.use('/pokemon', require('./api/pokemon'));

// Movimientos
router.use('/movimientos', require('./api/movimientos'));

// Mis Pokemons
router.use('/misPokemons', require('./api/misPokemons'));

module.exports = router;