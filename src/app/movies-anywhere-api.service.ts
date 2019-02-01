import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MoviesAnywhereApiService {
  constructor(private http: Http) { }

  getMovieByTitle(title: string) {
    debugger;
    return this.http.get(`http://www.omdbapi.com/?t="Guardians of the Galaxy Vol. 2"&apikey=895c6b03`);
  }
}
