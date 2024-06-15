import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Partidos } from "../models/partidos.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class PartidosService {
    private apiUrl = 'http://localhost:8080/partidos/enfrentamientos';
  
    constructor(private http: HttpClient) {}
  
    getPartidos(jugadorId1: string, jugadorId2: string): Observable<Partidos[]> {
      return this.http.get<Partidos[]>(`${this.apiUrl}?jugadorId1=${jugadorId1}&jugadorId2=${jugadorId2}`);
    }
}