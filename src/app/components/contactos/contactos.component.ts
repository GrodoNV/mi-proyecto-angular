import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// contactos.component.ts
@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card border-0 shadow-lg">
            <div class="card-body p-5">
              <h2 class="text-center mb-4">Contáctanos</h2>
              <form (ngSubmit)="onSubmit()" class="needs-validation">
                <div class="mb-4">
                  <label for="nombre" class="form-label">Nombre</label>
                  <div class="input-group">
                    <span class="input-group-text"><i class="bi bi-person"></i></span>
                    <input
                      type="text"
                      class="form-control"
                      id="nombre"
                      [(ngModel)]="userInfo.nombre"
                      name="nombre"
                      required
                      placeholder="Tu nombre"
                    >
                  </div>
                </div>

                <div class="mb-4">
                  <label for="email" class="form-label">Email</label>
                  <div class="input-group">
                    <span class="input-group-text"><i class="bi bi-envelope"></i></span>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      [(ngModel)]="userInfo.email"
                      name="email"
                      required
                      placeholder="tu@email.com"
                    >
                  </div>
                </div>

                <div class="mb-4">
                  <label for="mensaje" class="form-label">Mensaje</label>
                  <div class="input-group">
                    <span class="input-group-text"><i class="bi bi-chat-dots"></i></span>
                    <textarea
                      class="form-control"
                      id="mensaje"
                      [(ngModel)]="userInfo.mensaje"
                      name="mensaje"
                      rows="4"
                      placeholder="Tu mensaje aquí..."
                    ></textarea>
                  </div>
                </div>

                <div class="d-grid">
                  <button type="submit" class="btn btn-primary btn-lg">
                    <i class="bi bi-send me-2"></i>Enviar Mensaje
                  </button>
                </div>
              </form>

              <div class="mt-4" *ngIf="submitted">
                <div class="alert alert-success">
                  <h4 class="alert-heading"><i class="bi bi-check-circle me-2"></i>¡Mensaje Enviado!</h4>
                  <hr>
                  <p class="mb-0"><strong>Nombre:</strong> {{userInfo.nombre}}</p>
                  <p class="mb-0"><strong>Email:</strong> {{userInfo.email}}</p>
                  <p class="mb-0"><strong>Mensaje:</strong> {{userInfo.mensaje}}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-5 text-center">
            <div class="col-md-4">
              <div class="mb-4">
                <i class="bi bi-geo-alt text-primary" style="font-size: 2rem;"></i>
              </div>
              <h5>Ubicación</h5>
              <p>123 Calle Principal, Ciudad</p>
            </div>
            <div class="col-md-4">
              <div class="mb-4">
                <i class="bi bi-telephone text-primary" style="font-size: 2rem;"></i>
              </div>
              <h5>Teléfono</h5>
              <p>+1 234 567 890</p>
            </div>
            <div class="col-md-4">
              <div class="mb-4">
                <i class="bi bi-envelope text-primary" style="font-size: 2rem;"></i>
              </div>
              <h5>Email</h5>
              <p>info&#64;ejemplo.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactosComponent {
  userInfo = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
