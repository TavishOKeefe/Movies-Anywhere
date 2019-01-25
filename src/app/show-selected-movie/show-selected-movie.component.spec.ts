import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSelectedMovieComponent } from './show-selected-movie.component';

describe('ShowSelectedMovieComponent', () => {
  let component: ShowSelectedMovieComponent;
  let fixture: ComponentFixture<ShowSelectedMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSelectedMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSelectedMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
