import { Component, OnInit } from '@angular/core';
// He importado el HttpClientModule para poder hacer peticiones HTTP
import { HttpClient } from '@angular/common/http';

import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'frontend';
// }
// El componente AppComponent es el componente raíz de la aplicación Angular. Es el decorador principal que se utiliza para definir el componente y su configuración. En este caso, se ha definido el selector del componente como 'app-root', lo que significa que este componente se puede utilizar en el HTML de la aplicación como <app-root></app-root>. También se han definido las rutas y estilos del componente.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  mensajeBackend: string = 'Cargando...';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000', { responseType: 'text' })
      .subscribe(data => this.mensajeBackend = data);
  }
}
