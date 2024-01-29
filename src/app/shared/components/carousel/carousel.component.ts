import { Component, Input } from '@angular/core';
import { MovieModel } from '../../models/movies.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() movies!: MovieModel[];
}
