export interface Pokemon {
    nivel: number;
    nombre: string;
    tipo: string;
    puntosSaludActuales: number;
    puntosSaludTotales: number;
    puntosAtaqueBase: number;
    puntosDefensaBase: number;
    puntosAtaqueEspecialBase: number;
    puntosDefensaEspecialBase: number;
    puntosVelocidadBase: number;
    urlImage: string;
    movimientos: string[];
    rival: Pokemon | null
}
