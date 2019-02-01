import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowSelectedMovieComponent } from './show-selected-movie/show-selected-movie.component';
import { SearchComponent } from './search/search.component';
import { RedeemComponent } from './redeem/redeem.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { LogInComponent } from './log-in/log-in.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { MovieDetailComponent }   from './movie-detail/movie-detail.component';
import { ExploreComponent }   from './explore/explore.component';

const appRoutes: Routes = [
  {
    path: 'show-selected-movie',
    component: ShowSelectedMovieComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'redeem',
    component: RedeemComponent
  },
  {
    path: 'my-movies',
    component: MyMoviesComponent
  },
  {
    path: '',
    component: ExploreComponent
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'get-started',
    component: GetStartedComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
