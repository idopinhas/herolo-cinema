import { Component, OnInit, Inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { environment } from '../../../environments/environment';
import { MovieFormComponent } from '../movie-form/movie-form.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Array<Movie> = [];
  movie: Movie;

  constructor(private _ms: MoviesService, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.getMovies();
  }

  onClickMovieAdd(event) {
    event.preventDefault();
    const dialogRef = this.dialog.open(MovieFormComponent, {
      width: '65%',
      data: {
        movie: {
          id: '',
          Title: '',
          Year: '',
          Runtime: '',
          Genre: '',
          Director: '',
          Poster: 'http://lyriccinema.com/template_1/img/default-movie-portrait.jpg'
        },
        edit: false,
        movies: Object.assign([], this.movies)
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        result.id = this._ms.generateMovieId();
        this.movies.push(result);
      }
    });
  }

  showMovieFromParent(id: string): void {
    const dialogRef = this.dialog.open(MovieFormComponent, {
      width: '65%',
      data: {
        movie: Object.assign({}, this._ms.searchMovieById(id, this.movies)),
        edit: true,
        movies: Object.assign([], this.movies)
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.movies = this.movies.map(movie => {
          if (movie.id === result.id) movie = result;
          return movie;
        });
      }
    });
  }

  deleteMovieFromParent(id: string): void {
    if (confirm('Are you sure you want to delete this movie?')) {
      this.movies = this._ms.deleteMovie(id, this.movies);
    }
  }

  private getMovies(): void {
    environment.moviesList.map(id => {
      this._ms.getMovieById(id).subscribe((movie: Movie) => {
        const movieData = {
          id: id,
          Title: movie.Title,
          Year: movie.Year,
          Runtime: movie.Runtime,
          Genre: movie.Genre,
          Director: movie.Director,
          Poster: movie.Poster
        };
        this.movies.push(movieData);
      });
    });
  }

}
