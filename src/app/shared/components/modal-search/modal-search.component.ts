import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieModel } from '../../models/movies.model';
import { MovieService } from '../../services/movie.service';
import { UiService } from '../../services/ui.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.scss']
})
export class ModalSearchComponent {
  search!: string;
  resultSearch!: MovieModel[];

  constructor(private router: Router, private _movie: MovieService, private _ui: UiService) {}

  searchMovie(param: string) {
    this.search = param;
    this._ui.showLoader();
    this._movie
      .searchMovie(param)
      .pipe(finalize(() => this._ui.hideLoader()))
      .subscribe((resp: MovieModel[]) => {
        console.log(resp);
        this.resultSearch = resp.slice(0, 11);
      });
  }
  
  redirectDetails(id: number): void {
    this.router.navigate([`details/movie/${id}`]);
  }
}
