import { TestBed, inject } from '@angular/core/testing';

import { MoviesAnywhereApiService } from './movies-anywhere-api.service';

describe('MoviesAnywhereApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesAnywhereApiService]
    });
  });

  it('should be created', inject([MoviesAnywhereApiService], (service: MoviesAnywhereApiService) => {
    expect(service).toBeTruthy();
  }));
});
