import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieAddComponent } from './movie-add/movie-add.component';

import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    MovieListComponent,
    MovieAddComponent,
  ],
  imports: [ 
    MatSortModule,
    MatTableModule,
  ],
  exports: [
    MatSortModule,
    MatTableModule,
  ]
})
export class MovieModule { }
