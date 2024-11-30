import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-dark text-light py-5 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4 mb-md-0">
            <h5 class="mb-3">Sobre Nosotros</h5>
            <p class="text-muted">Somos una empresa dedicada a proporcionar soluciones innovadoras y servicios de calidad a nuestros clientes.</p>
          </div>
          <div class="col-md-4 mb-4 mb-md-0">
            <h5 class="mb-3">Enlaces Rápidos</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-muted text-decoration-none">Inicio</a></li>
              <li><a href="#" class="text-muted text-decoration-none">Noticias</a></li>
              <li><a href="#" class="text-muted text-decoration-none">Contacto</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5 class="mb-3">Síguenos</h5>
            <div class="d-flex gap-3">
              <a href="#" class="text-light fs-4"><i class="bi bi-facebook"></i></a>
              <a href="#" class="text-light fs-4"><i class="bi bi-twitter"></i></a>
              <a href="#" class="text-light fs-4"><i class="bi bi-instagram"></i></a>
              <a href="#" class="text-light fs-4"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
        <hr class="my-4">
        <div class="text-center text-muted">
          <small>&copy; 2024 Mi Proyecto Angular. Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent { }
