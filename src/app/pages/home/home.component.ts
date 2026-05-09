import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { StatsBarComponent } from './sections/stats-bar/stats-bar.component';
import { ServicesPreviewComponent } from './sections/services-preview/services-preview.component';
import { AboutPreviewComponent } from './sections/about-preview/about-preview.component';
import { ReviewsComponent } from './sections/reviews/reviews.component';
import { CtaBannerComponent } from './sections/cta-banner/cta-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    StatsBarComponent,
    ServicesPreviewComponent,
    AboutPreviewComponent,
    ReviewsComponent,
    CtaBannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
