import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { ScrollAnimateDirective } from '../../../../directives/scroll-animate.directive';
import { SERVICES } from '../../../../data/services.data';

@Component({
  selector: 'app-services-preview',
  standalone: true,
  imports: [RouterLink, SlicePipe, ScrollAnimateDirective],
  templateUrl: './services-preview.component.html',
  styleUrl: './services-preview.component.scss'
})
export class ServicesPreviewComponent {
  services = SERVICES.slice(0, 3);
}
