const { getAllMoves, getMoveById, createmove, updateMove, deleteMove, getMoveByPokeType, getPossibleMoves, getPokeListByMoves, getPokeListByMoveName } = require('../../models/movimientos.model');

const router = require('express').Router();

/* GET */

// Recuperar todos los movimientos
router.get('/', async (req, res) => {
    try {
        const [moves] = await getAllMoves()
        res.json(moves)
    } catch (error) {
        res.json({ fatal: 'No se ha podido recuperar los movimientos' })
    }
})

// Recuperar el movimiento por Id
router.get('/:movimientoId', async (req, res) => {

    const { movimientoId } = req.params
    try {
        const [move] = await getMoveById(movimientoId)
        res.json(move)
    } catch (error) {
        res.json({ fatal: 'No se ha podido recuperar el movimiento' })
    }
});

// Recuperar  movimiento  por el tipo de pokemon
router.get('/type/:type', async (req, res) => {
    const { type } = req.params
    try {
        const [moves] = await getMoveByPokeType(type)
        res.json(moves)
    } catch (error) {
        res.json({ fatal: 'No se a podido recuperar los movimientos conforme al tipo de pokemon' })
    }
});


// Obtener todos los movimientos posibles de un pokemon
router.get('/possible/:id', async (req, res) => {
    const { id } = req.params
    try {
        const [moves] = await getPossibleMoves(id)
        res.json(moves)
    } catch (error) {
        res.json({ fatal: 'No se ha podido recuperar el movimiento' })
    }
});

// Obtener una lista de pokemons que comparten el mismo movimiento
router.get('/move/:id', async (req, res) => {
    const { id } = req.params
    try {
        const [list] = await getPokeListByMoves(id)
        res.json(list)
    } catch (error) {
        res.json({ fatal: 'No se ha podido recuperar el movimiento' })
    }
});

// Obtener una lista de pokemons que comparten el mismo movimiento por el nombre
router.get('/move/name/:name', async (req, res) => {
    const { name } = req.params
    try {
        const [list] = await getPokeListByMoveName(name)
        res.json(list)
    } catch (error) {
        res.json({ fatal: 'No se ha podido recuperar el movimiento' })
    }
});

/* POST */

// Registrar nuevo movimiento
router.post('/', async (req, res) => {
    try {
        const [move] = await createmove(req.body)
        res.json(move)
    } catch (error) {
        res.json({ fatal: 'No se ha podido registrar el movimiento' })
    }
});

// Actualizar movimiento
router.put('/:moveId', async (req, res) => {
    const { moveId } = req.params
    try {
        const [move] = await updateMove(req.body, moveId);
        res.json(move)
    } catch (error) {
        res.json({ fatal: 'No se ha podido actualizar el movimiento' })
    }
});

// Borrar movimiento
router.delete('/:moveId', async (req, res) => {
    const { moveId } = req.params
    try {
        const [move] = await deleteMove(moveId)
        res.json(move)
    } catch (error) {
        res.json({ fatal: 'No se ha podido borrar el movimiento' })
    }
});


module.exports = router;