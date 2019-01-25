import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-show-selected-movie',
  templateUrl: './show-selected-movie.component.html',
  styleUrls: ['./show-selected-movie.component.css']
})
export class ShowSelectedMovieComponent implements OnInit {

  @Input() childSelectedMovie: Movie;
  @Output() clickedDone = new EventEmitter();

  finishedViewingFilm(){
    this.clickedDone.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
