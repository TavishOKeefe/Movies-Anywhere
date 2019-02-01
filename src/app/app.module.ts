import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RedeemComponent } from './redeem/redeem.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { SearchComponent } from './search/search.component';
import { LogInComponent } from './log-in/log-in.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { routing } from './app.routing';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ExploreComponent } from './explore/explore.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { HttpModule } from '@angular/http';
import { SearchedMovieComponent } from './searched-movie/searched-movie.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    RedeemComponent,
    MyMoviesComponent,
    SearchComponent,
    LogInComponent,
    GetStartedComponent,
    MovieDetailComponent,
    ExploreComponent,
    SearchedMovieComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
