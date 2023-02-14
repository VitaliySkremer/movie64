export interface IBigMovie{
  title: string;
  awards: string;
  companies:string;
  countries:string;
  directors:string;
  genres:string;
  imDbRating:string;
  image:string;
  plotLocal:string;
  stars:string;
  trailer:{
    linkEmbed:string;
  };
  year:string;
}

export interface IMovie{
  id:string;
  title:string;
  image:string;
  imDbRating: string;
  year:string
}

export interface IMovieList{
  items:IMovie[]
}

export interface IMovieListSearch{
  results:IMovie[]
}