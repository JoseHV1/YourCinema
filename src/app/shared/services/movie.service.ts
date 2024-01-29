import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { MovieModel, ResultModel } from '../models/movies.model';
import { DetailsMovieModel } from '../models/details-movie.model';

@Injectable({
  providedIn: 'root',
})
export class  MovieService {
  constructor(private _http: HttpClient) {}

  getQuery(query: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/${query}`;

    console.log(url);

    const headers = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGU2ZDBhNzIyOTU3MWE1NDY1ZGM3OGQ0MzU2NWY5MSIsInN1YiI6IjY1OTVhMzkzNTkwN2RlMzNhODYzYmYyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m_TjjKOa-PXCSFX7fw5QU0qjxWT_yxnfD_cvMQq85vI',
      },
    };

    return this._http.get(url, headers);
  }

  getMovies(numberPage: number): Observable<MovieModel[]> {
    return this.getQuery(`movie/now_playing?language=en-EN&page=${numberPage}`).pipe(
      map((res: ResultModel) => res.results)
    );
  }

  getMovie(id: string): Observable<DetailsMovieModel> {
    return this.getQuery(`movie/${id}`);
  }

  getCasts(id: string): Observable<any[]> {
    return this.getQuery(`movie/${id}/credits`).pipe(map((res) => res.cast));
  }

  searchMovie(param: string): Observable<MovieModel[]> {
    return this.getQuery(`search/movie?query=${param}&language=en-US`).pipe(
      map((resp: ResultModel) => resp.results)
    );
  }
}
