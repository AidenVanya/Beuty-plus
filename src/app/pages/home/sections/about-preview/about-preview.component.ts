import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollAnimateDirective } from '../../../../directives/scroll-animate.directive';

@Component({
  selector: 'app-about-preview',
  standalone: true,
  imports: [RouterLink, ScrollAnimateDirective],
  templateUrl: './about-preview.component.html',
  styleUrl: './about-preview.component.scss'
})
export class AboutPreviewComponent {
  values = [
    { icon: '✦', title: 'Hijyen & Kalite', description: 'Steril ekipman ve tek kullanımlık malzemelerle güvende hissediyorsunuz.' },
    { icon: '◈', title: 'Uzman Ekip', description: 'Uluslararası sertifikalı uzmanlardan profesyonel hizmet.' },
    { icon: '◇', title: 'Kişiye Özel', description: 'Yüz yapınıza ve tercihlerinize göre özelleştirilmiş güzellik protokolleri.' }
  ];
}
