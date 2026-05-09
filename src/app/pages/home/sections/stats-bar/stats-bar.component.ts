import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../../../directives/scroll-animate.directive';

@Component({
  selector: 'app-stats-bar',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './stats-bar.component.html',
  styleUrl: './stats-bar.component.scss'
})
export class StatsBarComponent {
  stats = [
    { value: '500+', label: 'Mutlu Müşteri' },
    { value: '3+',   label: 'Yıl Deneyim' },
    { value: '10+',  label: 'Hizmet Çeşidi' },
    { value: '100%', label: 'Müşteri Memnuniyeti' }
  ];
}
