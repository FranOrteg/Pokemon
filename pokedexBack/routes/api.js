const router = require('express').Router();

// Pokemons
router.use('/pokemon', require('./api/pokemon'));

module.exports = router;