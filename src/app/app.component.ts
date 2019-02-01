import { Component, OnInit } from '@angular/core';
import { Movie } from './models/movie.model';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieService]
})
export class AppComponent implements OnInit {

  constructor( private movieService: MovieService) {}

  masterMovieList: Movie[] = [
  ];

  selectedMovie = null;

  showMovie(clickedMovie){
    this.selectedMovie = clickedMovie;
  }

  finishedViewing(){
    this.selectedMovie = null;
  }

  ngOnInit(){
    this.masterMovieList = this.movieService.getMovies();
  }

}
