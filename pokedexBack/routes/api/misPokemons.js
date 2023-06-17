const { getMyPokeWithMoves, getMyPokeWithMovesById, createMyPoke } = require('../../models/mispokemons');

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
        const myPoke = await getMyPokeWithMovesById(pokeId)
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



module.exports = router;
