import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


enum TitleType {
  Short = "short",
  Movie = "movie",
  TvEpisode = "tvEpisode",
  TvMiniSeries = "tvMiniSeries",
  TvMovie = "tvMovie",
  TvSeries = "tvSeries",
  TvShort = "tvShort",
  TvSpecial = "tvSpecial",
  Video = "video",
  VideoGame = "videoGame",
}

enum Genre {  
  Action = "Action",
  Adult = "Adult",
  Adventure = "Adventure",
  Animation = "Animation",
  Biography = "Biography",
  Comedy = "Comedy",
  Crime = "Crime",
  Documentary = "Documentary",
  Drama = "Drama",
  Family = "Family",
  Fantasy = "Fantasy",
  GameShow = "Game-Show",
  History = "History",
  Horror = "Horror",
  Mystery = "Mystery",
  Music = "Music",
  News = "News",
  RealityV = "Reality-TV",
  Romance = "Romance",
  SciFi = "Sci-Fi",
  Short = "Short",
  Sport = "Sport",
  TalkShow = "Talk-Show",
  Thriller = "Thriller",
  War = "War",
  Western = "Western",
}

export interface Movie {

  tconst:string;	
  titleType:TitleType;	
  primaryTitle:string;	
  originalTitle:string;	
  isAdult:boolean;	
  startYear:number;	
  endYear:number;	
  runtimeMinutes:number;	
  genres:Genre[];	

}

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MovieAddComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Movie) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
