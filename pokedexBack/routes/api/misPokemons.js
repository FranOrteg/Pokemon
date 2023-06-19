const { getMyPokeWithMoves, getMyPokeWithMovesById, updateMyPoke, createMyPoke, deleteMyPokemon } = require('../../models/mispokemons');

const router = require('express').Router();


// Recuperar mis pokemons con sus movimientos
router.get('/', async (req, res) => {
    try {
        const [myPokes] = await getMyPokeWithMoves()
        res.json(myPokes)
    } catch (error) {
        res.json({ fatal: 'No se han encontrado tus Pokémons' })
    }
});

// Recuperar mis pokemons por Id
router.get('/:pokeId', async (req, res) => {
    const { pokeId } = req.params
    try {
        const [myPoke] = await getMyPokeWithMovesById(pokeId)
        console.log(myPoke)
        res.json(myPoke)
    } catch (error) {
        res.json({ fatal: 'No se han encontrado tus Pokémons' })
    }
});

// Crear mi pokemon 
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        const [myPoke] = await createMyPoke(req.body)
        res.json(myPoke)
    } catch (error) {
        console.log(error)
        res.json({ fatal: 'No se ha creado tu Pokémon' })
    }
})


// Actualizar mis pokemons y sus movimientos
router.put('/:pokeId', async (req, res) => {
    const { pokeId } = req.params

    try {
        const [myPoke] = await updateMyPoke(req.body, pokeId);
        res.json(myPoke);
    } catch (error) {
        console.log(error);
        res.json({ fatal: 'No se ha actualizado el Pokémon' });
    }
});

// Borrar mi pokemon y sus movimientos
router.delete('/:pokeId', async (req, res) => {
    const { pokeId } = req.params

    try {
        const [poke] = await deleteMyPokemon(pokeId)
        res.json(poke)
    } catch (error) {
        console.log(error);
        res.json({ fatal: 'No se ha borrado el Pokémon' });
    }
})




module.exports = router;
