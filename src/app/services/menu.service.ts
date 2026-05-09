import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MenuService {
  isOpen = signal(false);

  constructor() {
    effect(() => {
      document.body.style.overflow = this.isOpen() ? 'hidden' : '';
    });
  }

  toggle(): void { this.isOpen.update(v => !v); }
  close(): void  { this.isOpen.set(false); }
}
