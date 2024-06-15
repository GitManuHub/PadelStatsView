import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadoresComponent } from './modules/jugadores/jugadores.component';
import { ComparadorJugadoresComponent } from './modules/comparador-jugadores/comparador-jugadores.component';

/* const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/jugadores/jugadores.module').then(m => m.JugadoresModule) },
  { path: 'comparador', loadChildren: () => import('./modules/comparador-jugadores/comparador-jugadores.module').then(m => m.ComparadorJugadoresModule) }
]; */

const routes: Routes = [
  { path: '', redirectTo: '/ranking', pathMatch: 'full' },
  { path: 'ranking', component: JugadoresComponent },
  { path: 'comparador', component: ComparadorJugadoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
