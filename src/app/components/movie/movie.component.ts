import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;
  @Output()
  editClick: EventEmitter<String> = new EventEmitter<String>();
  @Output()
  deleteClick: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  onClickMovieEdit(id, event) {
    event.preventDefault();
    this.editClick.emit(id);
  }

  onClickDeleteMovie(id, event) {
    event.preventDefault();
    this.deleteClick.emit(id);
  }

}
