import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { MovieAddComponent } from './movie/movie-add/movie-add.component';
import { Movie } from './movie/movie.model';
import { MovieService } from './movie/movie.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'movies-app';
  displayedColumnsKeys: string[] = this.movieService.getdisplayedColumns();
  displayedColumns: string[]=[];
  public movies:Movie[]=this.movieService.getAllMovies();

  constructor(private translate: TranslateService, 
    public dialog: MatDialog, private movieService:MovieService) { 
                translate.setDefaultLang('en');
  
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

  changeLanguage(language: string): void {
    this.translate.use(language);
    
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
