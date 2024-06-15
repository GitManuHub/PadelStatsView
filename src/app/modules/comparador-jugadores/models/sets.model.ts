import { Partidos } from "./partidos.model";

export interface Sets {
    id: string;
    setNumero: number;
    puntosPareja1: number;
    puntosPareja2: number;
    partido: Partidos;
}