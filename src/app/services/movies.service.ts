import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _http: HttpClient) {

  }

  getMovieById(id: string) {
    return this._http.get(`${environment.apiUrl}&i=${id}`);
  }

  searchMovieById(id: string, movies: Array<Movie>): Movie {
    return movies.filter(movie => id === movie.id)[0];
  }

  deleteMovie(id: string, movies: Array<Movie>): Array<Movie> {
    return movies.filter(movie => id !== movie.id);
  }

  titleExist(movies: Array<Movie>, value: Movie, edit: boolean): boolean {

    let exist = false;

    if (edit) {
      movies.forEach(mv => {
        if (mv.id !== value.id && mv.Title === value.Title) {
          exist = true;
        }
      });
    } else {
      movies.forEach(mv => {
        if (mv.Title === value.Title) {
          exist = true;
        }
      });
    }
    return exist;
  }

  generateMovieId(len = 9) {

    let text = '',
    possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < len; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length - 1));
    }
    return text;
  }

}
