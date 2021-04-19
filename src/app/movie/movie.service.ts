import { Injectable } from '@angular/core';
import { Genre, Movie, TitleType } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getAllMovies():Movie[]{
    
    let movie:Movie={
      tconst:'tt0000086',
      titleType:TitleType.Short,
      primaryTitle:'short	Beach and Pier at Trouville',	
      originalTitle:'1st part	Jetée et plage de Trouville (1er partie)',	
      isAdult:true,	
      startYear:1896,	
      endYear:1996,
      runtimeMinutes:120,	
      genres:[Genre.Documentary, Genre.Short],
      };
  
    let  movies:Movie[]=[movie];

    return movies;

  }

  getdisplayedColumns(): string[]{
    let displayedColumnsKeys:string[]= ['tconst', 'titleType', 'primaryTitle', 'originalTitle', 'isAdult', 'startYear', 'endYear', 'runtimeMinutes', 'genres'];
    return displayedColumnsKeys;
  }
}
