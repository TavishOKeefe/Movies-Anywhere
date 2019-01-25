import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ShowSelectedMovieComponent } from './show-selected-movie/show-selected-movie.component';
import { RedeemComponent } from './redeem/redeem.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { SearchComponent } from './search/search.component';
import { LogInComponent } from './log-in/log-in.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ShowSelectedMovieComponent,
    RedeemComponent,
    MyMoviesComponent,
    SearchComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
