import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../../../directives/scroll-animate.directive';
import { REVIEWS } from '../../../../data/services.data';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  reviews = REVIEWS.slice(0, 3);
  stars = [1, 2, 3, 4, 5];
}
