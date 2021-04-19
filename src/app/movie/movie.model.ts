  export enum TitleType {
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
  
  export enum Genre {  
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
