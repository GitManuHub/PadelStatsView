import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  username: string = '';
  password: string = '';
  
  @Input()
  titulo = 'Ranking';

  constructor(
    private router: Router
  ) { }

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }

  login(): void {
    // Aquí iría la lógica para manejar el login, por ejemplo:
    if (this.username && this.password) {
      console.log('Iniciando sesión con', this.username, this.password);
      // Lógica de autenticación
    } else {
      alert('Por favor, ingrese usuario y contraseña');
    }
  }
}
