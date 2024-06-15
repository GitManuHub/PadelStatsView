import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ComparadorJugadoresComponent } from './comparador-jugadores.component';
import { FormsModule } from '@angular/forms';
import { comparadorRouting } from './comparador-jugadores-routing-module';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { AppModule } from 'src/app/app.module';



@NgModule({
  declarations: [
    //ComparadorJugadoresComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppModule
    //comparadorRouting
  ], exports: [
    //ComparadorJugadoresComponent,
  ]
})
export class ComparadorJugadoresModule { }
