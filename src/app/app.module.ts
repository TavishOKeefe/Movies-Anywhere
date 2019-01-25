import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ShowSelectedMovieComponent } from './show-selected-movie/show-selected-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ShowSelectedMovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
