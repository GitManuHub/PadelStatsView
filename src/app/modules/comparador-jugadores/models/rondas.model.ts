import { Torneos } from "./torneos.model";

export interface Rondas {
    id: string;
    nombre: string;
    torneo: Torneos;
}