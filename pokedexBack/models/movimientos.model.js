// Recuperar todos los movimientos
const getAllMoves = () => {
    return db.query('SELECT * FROM Pokedex.movimientos;')
};

// Recuperar movimiento por Id
const getMoveById = (moveId) => {
    return db.query('SELECT * FROM Pokedex.movimientos WHERE id = ?', [moveId])
};

// Registrar un movimiento
const createmove = ({ nombre, poder }) => {
    return db.query('INSERT INTO Pokedex.movimientos (nombre,poder) VALUES (?,?)', [nombre, poder])
}

// Actualizar los datos del movimiento
const updateMove = ({ nombre, poder }, moveId) => {
    return db.query('UPDATE Pokedex.movimientos SET nombre = ?, poder = ? WHERE id = ?', [nombre, poder, moveId])
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