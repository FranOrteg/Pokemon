// Recuperar todos los movimientos

const getAllMoves = () => {
    return db.query('SELECT * FROM Pokedex.movimientos;')
}

module.exports = {
    getAllMoves
}