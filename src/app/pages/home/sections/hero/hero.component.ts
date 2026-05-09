import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [
    trigger('heroEnter', [
      state('void', style({ opacity: 0, transform: 'translateY(50px)' })),
      transition(':enter', [
        animate('900ms 200ms cubic-bezier(0.22, 1, 0.36, 1)')
      ])
    ]),
    trigger('heroBadge', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition(':enter', [
        animate('700ms 100ms ease-out')
      ])
    ]),
    trigger('heroButtons', [
      state('void', style({ opacity: 0, transform: 'translateY(24px)' })),
      transition(':enter', [
        animate('700ms 500ms ease-out')
      ])
    ]),
    trigger('heroDecor', [
      state('void', style({ opacity: 0, transform: 'scale(0.6)' })),
      transition(':enter', [
        animate('1200ms 300ms ease-out')
      ])
    ])
  ]
})
export class HeroComponent {}
