import { Component, Inject } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';
import { MovieModel } from '../../shared/models/movies.model';
import { UiService } from '../../shared/services/ui.service';
import { DOCUMENT } from '@angular/common';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isSearch: boolean = false;
  movies!: MovieModel[];
  moviesBillboard!: MovieModel[];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _movie: MovieService,
    private _ui: UiService
  ) {
    this.fetMovies();
  }

  fetMovies(numberPages: number = 1) {
    this._ui.showLoader();

    this._movie
      .getMovies(numberPages)
      .subscribe((resp: MovieModel[]) => {
        this.movies = resp.splice(2, 16);
        this.moviesBillboard = resp.splice(0, 2);
        setTimeout(() => {
          this._ui.hideLoader();
        }, 3000);
      });
  }

  searchMovie(param: string){
    this._ui.showLoader();
    
    this._movie.searchMovie(param).subscribe((resp: MovieModel[]) => {
      this.movies = resp;
      setTimeout(() => {
        this._ui.hideLoader();
      }, 3000);
    });
  }
}
