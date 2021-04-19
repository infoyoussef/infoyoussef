import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

import { MovieAddComponent } from '../movie-add/movie-add.component';
import { Genre, Movie, TitleType } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = ELEMENT_DATA;

  displayedColumnsKeys: string[] = this.movieService.getdisplayedColumns();
  displayedColumns: string[]=[];
  public movies:Movie[]=this.movieService.getAllMovies();
  //dataSource = this.movies;

  constructor(private translate: TranslateService,
    public dialog: MatDialog, private movieService:MovieService) { 
    translate.get(this.displayedColumnsKeys).subscribe(translations => {

      this.displayedColumnsKeys.forEach(element => {
        this.displayedColumns.push(translations[element]);
      });

      //this.monthArray.push(translations['Months.January']);




     /* translations.forEach((element:string) => {
        this.displayedColumns.push(element);
      }); */
      console.log("translations");
      console.log(translations);
      
      console.log("displayedColumns");
      console.log(this.displayedColumns);
    });

  }

  ngOnInit(): void {
  }

  onRowClicked(row:any) {
    console.log('Row clicked: ', row);

    const dialogRef = this.dialog.open(MovieAddComponent, {      
      width: '650px',
      height: '400px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      //this.movie = result;
      console.log('nouveau movie: ', result);
      
      this.movies = result;
    });

  }

}
