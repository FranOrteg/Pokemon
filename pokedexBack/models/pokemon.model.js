// Recuperar todos los pokemons
const getAllPokemons = () => {
    return db.query('SELECT * FROM Pokedex.Pokemons')
};

// Recuperar pokemons por Id
const getPokemonById = (pokemonId) => {
    return db.query('SELECT * FROM Pokedex.Pokemons WHERE id = ?', [pokemonId]);
};

// Crear un Pokemon
const create = ({ nivel, nombre, tipo, puntosSaludActuales, puntosSaludTotales, puntosAtaqueBase, puntosDefensaBase, puntosAtaqueEspecialBase, puntosVelocidadBase, urlImage }) => {

    return db.query('INSERT INTO Pokedex.Pokemons (nivel, nombre, tipo,puntosSaludActuales,puntosSaludTotales,puntosAtaqueBase,puntosDefensaBase,puntosAtaqueEspecialBase,puntosVelocidadBase,urlImage) VALUES (?,?,?,?,?,?,?,?,?,?);', [nivel, nombre, tipo, puntosSaludActuales, puntosSaludTotales, puntosAtaqueBase, puntosDefensaBase, puntosAtaqueEspecialBase, puntosVelocidadBase, urlImage]);
};

// Actualizar Pokemon
const updatePokemon = ({ nivel, nombre, tipo, puntosSaludActuales, puntosSaludTotales, puntosAtaqueBase, puntosDefensaBase, puntosAtaqueEspecialBase, puntosVelocidadBase, urlImage }, pokemonId) => {

    return db.query(`UPDATE Pokedex.Pokemons
    SET nivel = ?, nombre = ?, tipo = ?, puntosSaludActuales = ?, puntosSaludTotales = ?, puntosAtaqueBase = ?, puntosDefensaBase = ?, puntosAtaqueEspecialBase= ?, puntosVelocidadBase = ?, urlImage = ?
    WHERE id = ? `, [nivel, nombre, tipo, puntosSaludActuales, puntosSaludTotales, puntosAtaqueBase, puntosDefensaBase, puntosAtaqueEspecialBase, puntosVelocidadBase, urlImage, pokemonId]);
};

// Borrar Pokemon
const deletePokemon = (pokemonId) => {
    return db.query('DELETE FROM Pokedex.Pokemons WHERE id = ?', [pokemonId]);
};


module.exports = {
    getAllPokemons,
    getPokemonById,
    create,
    updatePokemon,
    deletePokemon
}