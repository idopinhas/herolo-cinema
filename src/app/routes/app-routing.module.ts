import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { MoviesComponent } from '../components/movies/movies.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'movies', component: MoviesComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: []
})
export class AppRoutingModule { }