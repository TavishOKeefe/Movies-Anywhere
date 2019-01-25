import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() childMovieList: Movie[];
  @Output() clickSender = new EventEmitter();

  movieClicked(currentMovie: Movie) {
    this.clickSender.emit(currentMovie);
  }

  constructor() { }

  ngOnInit() {
  }

}
