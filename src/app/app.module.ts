import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JugadoresModule } from './modules/jugadores/jugadores.module';
import { ComparadorJugadoresModule } from './modules/comparador-jugadores/comparador-jugadores.module';
import { JugadoresComponent } from './modules/jugadores/jugadores.component';
import { ComparadorJugadoresComponent } from './modules/comparador-jugadores/comparador-jugadores.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    ComparadorJugadoresComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
