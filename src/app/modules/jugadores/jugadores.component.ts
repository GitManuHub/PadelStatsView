import { Component } from '@angular/core';
import { Jugadores } from './models/jugadores.model';
import { JugadoresService } from './services/jugadores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent {

  username: string = '';
  password: string = '';
  jugadores: Jugadores[] = [];
  

  constructor(
    private jugadoresService: JugadoresService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jugadoresService.getAll().subscribe((data: Jugadores[]) => {
      data.forEach(j => console.log("id:" + j.id));
      this.jugadores = data;
    });
  }

  getPhotoURL(jugador: Jugadores) : string {
    return jugador.rutaFoto;
  }

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }

  login(): void {
    if (this.username && this.password) {
      console.log('Iniciando sesión con', this.username, this.password);
    } else {
      alert('Por favor, ingrese usuario y contraseña');
    }
  }
}
