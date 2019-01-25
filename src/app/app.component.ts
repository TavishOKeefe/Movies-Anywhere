import { Component } from '@angular/core';
import { Movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  masterMovieList: Movie[] = [
  new Movie("Venom"),
  new Movie("It's a Wonderful Life"),
  new Movie("The Hustler"),
  new Movie("Rear Window")
  ];

  selectedMovie = null;

  showMovie(clickedMovie){
    this.selectedMovie = clickedMovie;
  }

}
