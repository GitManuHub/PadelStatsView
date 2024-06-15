import { Jugadores } from "../../jugadores/models/jugadores.model";
import { Rondas } from "./rondas.model";
import { Sets } from "./sets.model";

export interface Partidos {
    id: string;
    fecha: Date;
    ronda: Rondas;
    jugador1: Jugadores;
    jugador2: Jugadores;
    jugador3: Jugadores;
    jugador4: Jugadores;
    parejaGanadoraId: number;
    sets: Sets[];
}