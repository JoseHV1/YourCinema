export interface ResultModel {
  dates: DatesModel;
  page: number;
  results: MovieModel[];
  total_pages: number;
  total_results: number;
}

export interface DatesModel {
  maximum: string;
  minimum: string;
}

export interface MovieModel {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguageModel;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  character?: string;
  credit_id?: string;
  order?: number;
}

export enum OriginalLanguageModel {
  En = 'en',
  Ja = 'ja',
  No = 'no',
  Tl = 'tl',
}
