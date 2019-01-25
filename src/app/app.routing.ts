import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowSelectedMovieComponent } from './show-selected-movie/show-selected-movie.component';
import { SearchComponent } from './search/search.component';
import { RedeemComponent } from './redeem/redeem.component';

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
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
