// Recuperar todos los movimientos
const getAllMoves = () => {
    return db.query('SELECT * FROM Pokedex.movimientos;')
};

// Recuperar movimiento por Id
const getMoveById = (moveId) => {
    return db.query('SELECT * FROM Pokedex.movimientos WHERE id = ?', [moveId])
};

// Registrar un movimiento
const createmove = ({ ataque, poder }) => {
    return db.query('INSERT INTO Pokedex.movimientos (ataque,poder) VALUES (?,?)', [ataque, poder])
}

// Actualizar los datos del movimiento
const updateMove = ({ ataque, poder }, moveId) => {
    return db.query('UPDATE Pokedex.movimientos SET ataque = ?, poder = ? WHERE id = ?', [ataque, poder, moveId])
};

// Borrar movimiento
const deleteMove = (moveId) => {
    return db.query('DELETE FROM pokedex.movimientos WHERE id = ?', [moveId])
}

module.exports = {
    getAllMoves,
    getMoveById,
    createmove,
    updateMove,
    deleteMove
}