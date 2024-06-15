import { Component } from '@angular/core';
import { Partidos } from './models/partidos.model';
import { PartidosService } from './services/partidos.service';
import { JugadoresService } from '../jugadores/services/jugadores.service';
import { Jugadores } from '../jugadores/models/jugadores.model';
import { DatePipe } from '@angular/common';
import { Observable, Subject, debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-comparador-jugadores',
  templateUrl: './comparador-jugadores.component.html',
  styleUrls: ['./comparador-jugadores.component.css']
})
export class ComparadorJugadoresComponent {

  jugadorId1 = '';
  jugadorId2 = '';
  partidos: Partidos[] = [];
  jugadores: Jugadores[] = [];
  jugador1: Jugadores | null = null;
  jugador2: Jugadores | null = null;
  titulo = 'Comparador';
  primeraBusquedaHecha = false;

  filteredJugadores1: Jugadores[] = [];
  filteredJugadores2: Jugadores[] = [];
  private searchTerms1 = new Subject<string>();
  private searchTerms2 = new Subject<string>();

  constructor(
    private partidosService: PartidosService,
    private jugadoresService: JugadoresService,
  ) {
    
  }

  ngOnInit() {
    this.populateJugadores();

    this.searchTerms1.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.filterJugadores(term))
    ).subscribe(jugadores => this.filteredJugadores1 = jugadores);

    this.searchTerms2.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.filterJugadores(term))
    ).subscribe(jugadores => this.filteredJugadores2 = jugadores);
  }

  /* formatearFecha(fecha: string): string {
    return this.datePipe.transform(fecha, 'dd/MM/yyyy') ?? new Date().toString();
  } */

  populateJugadores() {
    this.jugadoresService.getAll().subscribe((data: Jugadores[]) => {
      this.jugadores = data;
    });
  }

  searchJugadores1(term: any): void {
    this.searchTerms1.next(term.target.value);
  }

  searchJugadores2(term: any): void {
    this.searchTerms2.next(term.target.value);
  }

  buscarJugadores() {
    this.jugador1 = this.jugadores.find(jugador => jugador.id === this.jugadorId1) || null;
    this.jugador2 = this.jugadores.find(jugador => jugador.id === this.jugadorId2) || null;
  }

  buscarPartidos() {
    this.primeraBusquedaHecha = true;
    this.buscarJugadores();

    if (this.jugador1 && this.jugador2) {
      this.partidosService.getPartidos(this.jugadorId1, this.jugadorId2).subscribe((data: Partidos[]) => {
        this.partidos = data;
      });
    } else {
      this.partidos = [];
    }
  }

  filterJugadores(term: string): Observable<Jugadores[]> {
    if (!term.trim()) {
      return of([]);
    }
    return of(this.jugadores.filter(jugador => 
      jugador.nombre.toLowerCase().includes(term.toLowerCase())));
  }

  selectJugador1(jugador: Jugadores): void {
    this.jugadorId1 = jugador.id;
    this.jugador1 = jugador;
    this.filteredJugadores1 = [];
  }

  selectJugador2(jugador: Jugadores): void {
    this.jugadorId2 = jugador.id;
    this.jugador2 = jugador;
    this.filteredJugadores2 = [];
  }
}
