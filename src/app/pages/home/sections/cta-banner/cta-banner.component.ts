import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../../../directives/scroll-animate.directive';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './cta-banner.component.html',
  styleUrl: './cta-banner.component.scss'
})
export class CtaBannerComponent {}
