
import { RouterModule, Routes } from '@angular/router';
import { JugadoresComponent } from './jugadores.component';
import { ComparadorJugadoresComponent } from '../comparador-jugadores/comparador-jugadores.component';

export const routes: Routes = [
  {path: '', component: JugadoresComponent},
];


export const jugadoresRouting = RouterModule.forChild(routes);