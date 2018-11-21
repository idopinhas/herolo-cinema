import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  titleExist: boolean = false;

  constructor(
    private _ms: MoviesService,
    public dialogRef: MatDialogRef<MovieFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  ngOnInit() { }

  onSubmit({ value, valid }: { value: Movie, valid: boolean }): void {
    if (valid) {
      let exist = this._ms.titleExist(this.data.movies, value, this.data.edit);
      if (exist) {
        this.titleExist = true;
      } else {
        this.dialogRef.close(value);
      }
    }
  }

}
