import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss'],
})
export class CardMovieComponent {
  @Input() movie!: { id: number; poster_path: string };
  @Input() height: string = '100%';

  constructor(private router: Router) {}

  redirectDetails(id: number): void {
    this.router.navigate([`details/movie/${id}`]);
  }
}
