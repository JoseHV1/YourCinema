import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MovieModel, ResultModel } from '../models/movies.model';
import { CastModel } from '../models/cast.model';

@Injectable({
  providedIn: 'root',
})
export class CastService {
  constructor(private _http: HttpClient) {}

  getQuery(query: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/person/${query}`;

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

  getCast(id: string): Observable<CastModel> {
    return this.getQuery(`${id}?language=en-US`);
  }

  getMoviesCast(id: string): Observable<MovieModel[]> {
    return this.getQuery(`${id}/movie_credits?language=en-US`).pipe(
      map((resp: any) => resp.cast)
    );
  }
}
