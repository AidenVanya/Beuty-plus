import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { VALUES, TIMELINE } from '../../data/services.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  values = VALUES;
  timeline = TIMELINE;

  gallery = [
    'assets/uploads/img_1.png',
    'assets/uploads/img_3.png',
    'assets/uploads/img_5.png',
    'assets/uploads/img_6.png',
    'assets/uploads/img_8.png',
    'assets/uploads/img_10.png'
  ];
}
