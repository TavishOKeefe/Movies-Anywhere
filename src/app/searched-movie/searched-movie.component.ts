import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-searched-movie',
  templateUrl: './searched-movie.component.html',
  styleUrls: ['./searched-movie.component.css'],
  providers: [ ]
})
export class SearchedMovieComponent implements OnInit {

  constructor() { }
  @Input() childMovieDescriptions;
  ngOnInit() {
  }

}
