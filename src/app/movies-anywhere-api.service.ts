import { moviesAnywhereKey } from './api-keys';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MoviesAnywhereApiService {
  constructor(private http: Http) { }

  getMovieByTitle(title: string) {
    debugger;
    return this.http.get(`http://www.omdbapi.com/?t=${title}&apikey=${moviesAnywhereKey}`);
  }
}
