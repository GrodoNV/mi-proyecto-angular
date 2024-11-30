import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MenuComponent, FooterComponent, CommonModule],
  template: `
    <app-menu></app-menu>
    <div class="container mt-4">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `
})
export class AppComponent {
  title = 'mi-proyecto-angular';
}
