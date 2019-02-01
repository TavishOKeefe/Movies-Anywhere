import { Injectable } from '@angular/core';
import { Movie } from './models/movie.model';
import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {

  constructor() { }

  getMovies() {
  return MOVIES;
}

}
