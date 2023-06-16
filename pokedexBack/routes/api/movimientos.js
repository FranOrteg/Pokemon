const { getAllMoves } = require('../../models/movimientos.model');

const router = require('express').Router();

// Recuperar todos los movimientos
router.get('/', async (req, res) => {
    try {
        const [moves] = await getAllMoves()
        res.json(moves)
    } catch (error) {
        res.json({ fatal: 'No se ha podido recuperar los movimientos' })
    }
})

module.exports = router;