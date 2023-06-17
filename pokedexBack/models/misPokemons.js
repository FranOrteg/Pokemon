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





module.exports = {
    getMyPokeWithMoves,
    getMyPokeWithMovesById,
    createMyPoke
}