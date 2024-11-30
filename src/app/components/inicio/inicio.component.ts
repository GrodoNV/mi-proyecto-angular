import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Importa RouterModule

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h1 class="display-4 fw-bold mb-4">Bienvenido a nuestro proyecto</h1>
          <p class="lead mb-4">Descubre todas las características y servicios que tenemos para ofrecerte en esta moderna aplicación web.</p>

        </div>
        <div class="col-lg-6">
          <div class="p-5">
            <img src="https://i.blogs.es/ceda9c/dalle/450_1000.jpg" class="img-fluid rounded-3 shadow" alt="Hero image">
          </div>
        </div>
      </div>

      <div class="row mt-5 g-4">
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center p-4">
              <div class="feature-icon bg-primary bg-gradient text-white rounded-circle mb-3 mx-auto" style="width: 50px; height: 50px; line-height: 50px;">
                <i class="bi bi-lightning-charge"></i>
              </div>
              <h5 class="card-title">Innovacion</h5>
              <p class="card-text">Una autentica forma de existir revelando nuestra forma autentica y unica</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center p-4">
              <div class="feature-icon bg-primary bg-gradient text-white rounded-circle mb-3 mx-auto" style="width: 50px; height: 50px; line-height: 50px;">
                <i class="bi bi-graph-up"></i>
              </div>
              <h5 class="card-title">Valentia</h5>
              <p class="card-text">Honor Valor y Honra </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center p-4">
              <div class="feature-icon bg-primary bg-gradient text-white rounded-circle mb-3 mx-auto" style="width: 50px; height: 50px; line-height: 50px;">
                <i class="bi bi-shield-check"></i>
              </div>
              <h5 class="card-title">Responsabilidad</h5>
              <p class="card-text">Destacamos por la Responsabilidad y brillamos por nuestro sentido de perseverancias.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class InicioComponent { }
