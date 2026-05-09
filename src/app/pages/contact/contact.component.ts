import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ScrollAnimateDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  submitted = false;
  submitSuccess = false;

  hours = [
    { day: 'Pazartesi – Cuma', time: '09:00 – 20:00' },
    { day: 'Cumartesi',        time: '09:00 – 19:00' },
    { day: 'Pazar',            time: '10:00 – 17:00' }
  ];

  form = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    phone:   ['', [Validators.required, Validators.pattern(/^[0-9\s\+\-\(\)]{10,}$/)]],
    service: ['', Validators.required],
    message: ['']
  });

  services = [
    'Protez Tırnak',
    'İpek Kirpik',
    'Kaş Tasarımı',
    'Saç Bakımı',
    'Cilt Bakımı',
    'Masaj & SPA',
    'Diğer'
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) return;

    const { name, phone, service, message } = this.form.value;
    const text = `Merhaba! Randevu almak istiyorum.\n\nAd: ${name}\nTelefon: ${phone}\nHizmet: ${service}\n${message ? 'Not: ' + message : ''}`;
    const url = `https://wa.me/905072075163?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');

    this.submitSuccess = true;
    this.form.reset();
    this.submitted = false;
  }
}
