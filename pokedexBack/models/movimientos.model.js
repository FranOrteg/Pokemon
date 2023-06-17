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
};

// Obtener los movimientos de un Pokemon segun su tipo
const getMoveByPokeType = (pokeType) => {
    return db.query(`SELECT P.tipo AS tipoPokemon, P.nombre, GROUP_CONCAT(M.ataque SEPARATOR ',')               AS ataques, GROUP_CONCAT(M.poder SEPARATOR ', ') AS poder
                    FROM movimientos AS M
                    JOIN pokemonsMovimientos AS pm ON pm.movimientos_id = M.id
                    JOIN mypokemons AS myP ON myP.id = pm.mypokemons_id
                    JOIN pokemons AS P ON P.id = myP.Pokemons_id
                    WHERE P.tipo = ?
                    GROUP BY P.tipo, P.nombre;`, [pokeType])
}

module.exports = {
    getAllMoves,
    getMoveById,
    createmove,
    updateMove,
    deleteMove,
    getMoveByPokeType
}