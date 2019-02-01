import { Component } from '@angular/core';
import { Movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  masterMovieList: Movie[] = [
  new Movie("Venom", 1),
  new Movie("It's a Wonderful Life", 2),
  new Movie("The Hustler", 3),
  new Movie("Rear Window", 4)
  ];

  selectedMovie = null;

  showMovie(clickedMovie){
    this.selectedMovie = clickedMovie;
  }

  finishedViewing(){
    this.selectedMovie = null;
  }

}
