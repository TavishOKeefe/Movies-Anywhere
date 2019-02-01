import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  constructor(private router: Router) { }

  @Input() childMovieList: Movie[];
  // @Output() clickSender = new EventEmitter();

  goToDetailPage(clickedMovie: Movie) {
    this.router.navigate(['movies', clickedMovie.id]);
  };

  // movieClicked(currentMovie: Movie) {
  //   this.clickSender.emit(currentMovie);
  // }


  ngOnInit() {
  }

}
