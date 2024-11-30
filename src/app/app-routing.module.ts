import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ContactosComponent } from './components/contactos/contactos.component';

// Definición de las rutas
export const routes: Routes = [  // Agrega "export" aquí para que sea accesible desde otros módulos
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: '**', redirectTo: '/inicio' }  // Ruta comodín para manejar URLs no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Usa las rutas definidas aquí
  exports: [RouterModule]
})
export class AppRoutingModule { }
