import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // Importa el módulo de rutas

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Usa AppRoutingModule aquí para cargar las rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
