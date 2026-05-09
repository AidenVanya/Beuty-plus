import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger, transition, style, animate, query, stagger
} from '@angular/animations';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { SERVICES, CATEGORIES, Service } from '../../data/services.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(24px)' }),
          stagger(80, [
            animate('450ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ServicesComponent {
  categories = CATEGORIES;
  activeCategory = signal('all');

  filteredServices = computed<Service[]>(() => {
    const cat = this.activeCategory();
    return cat === 'all'
      ? SERVICES
      : SERVICES.filter(s => s.category === cat);
  });

  setCategory(key: string): void {
    this.activeCategory.set(key);
  }
}
