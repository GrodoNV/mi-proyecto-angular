// menu.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#">
          <i class="bi bi-code-square me-2"></i>Mi Proyecto
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link px-3" [routerLink]="['/inicio']" routerLinkActive="active">
                <i class="bi bi-house-door me-1"></i>Inicio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" [routerLink]="['/noticias']" routerLinkActive="active">
                <i class="bi bi-newspaper me-1"></i>Noticias
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" [routerLink]="['/contactos']" routerLinkActive="active">
                <i class="bi bi-envelope me-1"></i>Contactos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar-nav .nav-link.active {
      background-color: rgba(255,255,255,0.2);
      border-radius: 5px;
    }
    .nav-link {
      transition: all 0.3s ease;
    }
    .nav-link:hover {
      background-color: rgba(255,255,255,0.1);
      border-radius: 5px;
    }
  `]
})
export class MenuComponent { }
