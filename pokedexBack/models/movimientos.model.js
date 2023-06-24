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
                    JOIN Pokemons AS P ON P.id = myP.Pokemons_id
                    WHERE P.tipo = ?
                    GROUP BY P.tipo, P.nombre;`, [pokeType])
};

// Obtener todos los movimientos posibles de un pokemon
const getPossibleMoves = (pokeId) => {
    return db.query(`SELECT M.*
                    FROM movimientos AS M
                    JOIN pokemonsMovimientos AS pm ON pm.movimientos_id = M.id
                    JOIN mypokemons AS myP ON myP.id = pm.mypokemons_id
                    WHERE myP.Pokemons_id = ?`, [pokeId])
};

// mostrar una lista de los pokémons que comparten un mismo movimiento
const getPokeListByMoves = (moveId) => {
    return db.query(`SELECT pb.id, pb.nombre, m.ataque
                    FROM Pokemons AS pb
                    JOIN Pokemoves AS phm ON pb.id = phm.pokemons_id
                    JOIN movimientos AS m ON phm.movimientos_id = m.id
                    WHERE m.id = ?;`, [moveId])
}

// mostrar una lista de pokemons por el nombre de movimiento
const getPokeListByMoveName = (moveName) => {
    return db.query(`SELECT DISTINCT pb.id, pb.nombre, m.ataque
                    FROM Pokemons AS pb
                    JOIN Pokemoves AS pm ON pb.id = pm.pokemons_id
                    JOIN movimientos AS m ON pm.movimientos_id = m.id
                    WHERE m.ataque = ?;`, [moveName])
};

// obtener un pokemon con sus movimientos juntos
const getPokeWithmovesJoin = (pokeId) => {
    return db.query(`SELECT pb.*, 
                    GROUP_CONCAT(m.ataque SEPARATOR ', ') AS ataques,
                    GROUP_CONCAT(m.poder SEPARATOR ', ') AS poderes
                    FROM Pokemons AS pb
                    JOIN Pokemoves pm ON pb.id = pm.pokemons_id
                    JOIN movimientos m ON m.id = pm.movimientos_id
                    WHERE pb.id = ?
                    GROUP BY pb.id, pb.nivel, pb.nombre, pb.tipo, pb.puntosSaludActuales, pb.puntosSaludTotales, pb.puntosAtaqueBase, pb.puntosDefensaBase,pb.puntosAtaqueEspecialBase,pb.puntosVelocidadBase,pb.urlImage;`, [pokeId])
}

const getPokeWithmoves = (pokeId) => {
    return db.query(`SELECT pb.*, m.* 
                    FROM Pokemons AS pb
                    JOIN Pokemoves pm ON pb.id = pm.pokemons_id
                    JOIN movimientos m ON m.id = pm.movimientos_id
                    WHERE pb.id = ?`, [pokeId]);
}

module.exports = {
    getAllMoves,
    getMoveById,
    createmove,
    updateMove,
    deleteMove,
    getMoveByPokeType,
    getPossibleMoves,
    getPokeListByMoves,
    getPokeListByMoveName,
    getPokeWithmoves,
    getPokeWithmovesJoin
}