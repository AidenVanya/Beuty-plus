import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  menu = inject(MenuService);

  navLinks = [
    { label: 'Ana Sayfa', path: '/',         exact: true  },
    { label: 'Hizmetler', path: '/services',  exact: false },
    { label: 'Hakkımızda',path: '/about',     exact: false },
    { label: 'İletişim',  path: '/contact',   exact: false }
  ];
}
