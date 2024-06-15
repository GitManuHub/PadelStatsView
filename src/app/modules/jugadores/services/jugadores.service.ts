import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugadores } from '../models/jugadores.model';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {
  private apiUrl = 'http://localhost:8080/jugadores';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Jugadores[]> {
    return this.http.get<Jugadores[]>(`${this.apiUrl}`);
  }

  getById(id: number): Observable<Jugadores> {
    return this.http.get<Jugadores>(`${this.apiUrl}/${id}`);
  }

  create(jugador: Jugadores): Observable<Jugadores> {
    return this.http.post<Jugadores>(`${this.apiUrl}/insertar`, jugador, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  createAll(jugadores: Jugadores[]): Observable<Jugadores[]> {
    return this.http.post<Jugadores[]>(`${this.apiUrl}/insertarTodos`, jugadores, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  update(id: number, jugador: Jugadores): Observable<Jugadores> {
    return this.http.put<Jugadores>(`${this.apiUrl}/${id}`, jugador, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

  