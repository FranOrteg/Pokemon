// Recuperar mis pokemons con sus movimientos
const getMyPokeWithMoves = () => {
    return db.query(`SELECT myP.*, P.nombre AS nombrePokemon, P.tipo, P.urlImage, 
                    GROUP_CONCAT(M.ataque) AS ataques
                    FROM mypokemons AS myP
                    JOIN pokemonsMovimientos AS pm ON pm.mypokemons_id = myP.id
                    JOIN movimientos AS M ON M.id = pm.movimientos_id
                    JOIN Pokemons AS P ON P.id = myP.Pokemons_id
                    GROUP BY myP.id`);
};

// Recuperar mis pokemons con sus movimientos por Id
const getMyPokeWithMovesById = (pokeId) => {
    return db.query(`SELECT myP.*, P.nombre AS nombrePokemon, P.tipo, P.urlImage, 
                    GROUP_CONCAT(M.ataque) AS ataques
                    FROM mypokemons AS myP
                    JOIN pokemonsMovimientos AS pm ON pm.mypokemons_id = myP.id
                    JOIN movimientos AS M ON M.id = pm.movimientos_id
                    JOIN Pokemons AS P ON P.id = myP.Pokemons_id
                    WHERE myP.id = ?
                    GROUP BY myP.id`, [pokeId]);
};

// Crear mi pokemon
const createMyPoke = ({ apodo, nivelActual, experiencia, estado, nombre }) => {
    return db.query(`INSERT INTO mypokemons (apodo, nivelActual, experiencia, estado, Pokemons_id)
                    SELECT ?, ?, ?, ?, id
                    FROM Pokemons
                    WHERE nombre = ?`, [apodo, nivelActual, experiencia, estado, nombre]);
};

// Actualizar mis pokemons
const updateMyPoke = ({ apodo, nivelActual, experiencia, estado, movimientos }, id) => {
    return db.query(`UPDATE mypokemons SET apodo = ?, nivelActual = ?, experiencia = ?, estado = ?
    WHERE id = ?`, [apodo, nivelActual, experiencia, estado, id])
        .then(() => {

            return db.query(`DELETE FROM pokemonsMovimientos WHERE mypokemons_id = ?`, [id]);
        })
        .then(() => {
            const insertPromises = movimientos.map((movimientoId) => {
                return db.query(`INSERT INTO pokemonsMovimientos (mypokemons_id, movimientos_id)
                                VALUES (?, ?)`, [id, movimientoId]);
            });
            return Promise.all(insertPromises);
        })
        .then(() => {
            return getMyPokeWithMovesById(id);
        });
};

// Borrar mi Pokemon
const deleteReferences = (miPokeId) => {
    return db.query('DELETE FROM pokemonsMovimientos WHERE mypokemons_id = ?', [miPokeId]);
};

const deleteMyPokemon = (pokeId, miPokeId) => {
    return deleteReferences(miPokeId)
        .then(() => {
            return db.query('DELETE FROM mypokemons WHERE id = ?', [pokeId]);
        });
};



module.exports = {
    getMyPokeWithMoves,
    getMyPokeWithMovesById,
    createMyPoke,
    updateMyPoke,
    deleteMyPokemon
}