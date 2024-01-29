import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from 'src/app/shared/models/movies.model';
import { UiService } from '../../shared/services/ui.service';
import { finalize } from 'rxjs';
import { CastService } from '../../shared/services/cast.service';
import { CastModel } from '../../shared/models/cast.model';

@Component({
  selector: 'app-details-cast',
  templateUrl: './details-cast.component.html',
  styleUrls: ['./details-cast.component.scss'],
})
export class DetailsCastComponent {
  detailsCast!: CastModel;
  moviesCast!: MovieModel[];

  constructor(
    private _cast: CastService,
    private router: ActivatedRoute,
    private _ui: UiService
  ) {
    this._ui.showLoader();

    this.router.params.subscribe((res) => {
      this._cast.getCast(res['id']).subscribe((cast: CastModel) => {
        this.detailsCast = cast;
      });

      this._cast.getMoviesCast(res['id']).subscribe((movies: MovieModel[]) => {
        this.moviesCast = movies.splice(0, 4);
      });

      setTimeout(() => {
        this._ui.hideLoader();
      }, 3000);
    });
  }
}
