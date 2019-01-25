import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowSelectedMovieComponent } from './show-selected-movie/show-selected-movie.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ShowSelectedMovieComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
