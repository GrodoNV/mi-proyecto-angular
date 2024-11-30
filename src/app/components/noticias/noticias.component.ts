// noticias.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5">
      <h1 class="display-5 fw-bold mb-4 text-center">Últimas Noticias</h1>
      <div class="row g-4">
        <div class="col-md-4" *ngFor="let i of [1,2,3,4,5,6]">
          <div class="card h-100 border-0 shadow-sm hover-card">
            <img src="https://e.rpp-noticias.io/xlarge/2024/08/14/251925_1626775.webp" class="card-img-top" alt="Noticia imagen">
            <div class="card-body">
              <div class="d-flex mb-3">
                <span class="badge bg-primary me-2">Tecnología</span>
                <small class="text-muted">Hace 3 días</small>
              </div>
              <h5 class="card-title">Noticia {{i}}: La evolución de la tecnología</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. La tecnología avanza rápidamente y aquí te contamos todo sobre las últimas tendencias.</p>
              <a href="#" class="btn btn-outline-primary">Leer más</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hover-card {
      transition: transform 0.3s ease;
    }
    .hover-card:hover {
      transform: translateY(-5px);
    }
  `]
})
export class NoticiasComponent { }
