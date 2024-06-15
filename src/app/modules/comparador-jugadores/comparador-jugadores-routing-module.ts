import { RouterModule, Routes } from '@angular/router';
import { ComparadorJugadoresComponent } from './comparador-jugadores.component';


export const routes: Routes = [
  {path: '', component: ComparadorJugadoresComponent},
];

export const comparadorRouting = RouterModule.forChild(routes);