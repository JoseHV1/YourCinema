import { Component } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { UiService } from '../../shared/services/ui.service';
import { finalize } from 'rxjs';
import { DetailsMovieModel } from '../../shared/models/details-movie.model';
import { CastModel } from '../../shared/models/cast.model';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.scss'],
})
export class DetailsMovieComponent {
  detailsMovie!: DetailsMovieModel;
  castMovie!: CastModel[];

  constructor(
    private _movie: MovieService,
    private router: ActivatedRoute,
    private _ui: UiService
  ) {
    this._ui.showLoader();

    this.router.params
      .pipe(finalize(() => console.log('fin 1')))
      .subscribe((res) => {
        this._movie
          .getMovie(res['id'])
          .subscribe((movie: DetailsMovieModel) => {
            this.detailsMovie = movie;
          });

        this._movie.getCasts(res['id']).subscribe((cast: CastModel[]) => {
          this.castMovie = cast.splice(0, 4);
        });

        setTimeout(() => {
          this._ui.hideLoader();
        }, 3000);
      });
  }
}
