import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
// import { MovieService } from '../movie.service';
import { MoviesAnywhereApiService } from '../movies-anywhere-api.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  providers: [MoviesAnywhereApiService]
})
export class ExploreComponent implements OnInit {

  movieDescriptions: any[] = null;

  constructor( private moviesAnywhereApiService: MoviesAnywhereApiService) { }

    getMovieInfo(title: string){
      debugger;
      this.movieDescriptions=null;
      this.moviesAnywhereApiService.getMovieByTitle(title).subscribe(response => {
      this.movieDescriptions = response.json();
      });
    }


    masterMovieList: Movie[] = [
    ];

    ngOnInit(){
      // this.masterMovieList = this.movieService.getMovies();
    }

}
