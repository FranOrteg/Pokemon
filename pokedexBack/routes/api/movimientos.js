const { getAllMoves, getMoveById, createmove, updateMove, deleteMove, getMoveByPokeType } = require('../../models/movimientos.model');

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
})

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