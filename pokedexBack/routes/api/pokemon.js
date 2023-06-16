const { getAllPokemons, getPokemonById, create, updatePokemon, deletePokemon } = require('../../models/pokemon.model');

const router = require('express').Router();

// Recuperar todos los pokemons
router.get('/', async (req, res) => {
    try {
        const [result] = await getAllPokemons();
        res.json(result)
    } catch (error) {
        res.json({ fatal: 'No se pueden recuperar los pokemons' })
    }
});

// Recuperar Pokemons por Id
router.get('/:pokemonId', async (req, res) => {
    const { pokemonId } = req.params
    try {
        const [pokemon] = await getPokemonById(pokemonId)
        res.json(pokemon)
    } catch (error) {
        res.json({ fatal: 'No se ha podido recuperar el pokemon escogido' })
    }
});

// Registro de Pokemon
router.post('/create', async (req, res) => {
    try {
        const [result] = await create(req.body);
        res.json(result)
    } catch (error) {
        res.json({ fatal: 'Pokemon no se ha creado' })
    }
});

// Actualizar Pokemon
router.put('/:pokemonId', async (req, res) => {
    const { pokemonId } = req.params
    try {
        const [update] = await updatePokemon(req.body, pokemonId)
        res.json(update)
    } catch (error) {
        res.json({ fatal: 'No se ha podido actualizar el pokemon' })
    }
});

// Eliminar Pokemon
router.delete('/:pokemonId', async (req, res) => {
    const { pokemonId } = req.params
    try {
        const [pokemon] = await deletePokemon(pokemonId);
        res.json(pokemon)
    } catch (error) {
        res.json({ fatal: 'No se ha podido borrar el pokemon' })
    }
})



module.exports = router;