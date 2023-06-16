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
    movimientos: string[];
    rival: Pokemon | null
}
