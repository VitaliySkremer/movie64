import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export interface IMovie{
  id:string;
  title:string;
  image:string;
  imDbRating: string;
}

export interface IMovieList{
  items:IMovie[]
}

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery:fetchBaseQuery({baseUrl:'https://imdb-api.com/API'}),
  endpoints:(build)=>({
    getTopMovie:build.query<IMovieList,string>({
      query:()=> ({
        url:`Top250Movies/${import.meta.env.VITE__APP_API_KEY}`
      })
    }),
    getPopularMovie:build.query<IMovieList,string>({
      query:()=> ({
        url:`MostPopularMovies/${import.meta.env.VITE__APP_API_KEY}`
      })
    })
  })
});