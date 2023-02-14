import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IBigMovie, IMovieList, IMovieListSearch} from "./model";


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
    }),
    getMovie:build.query<IBigMovie,string>({
      query:(id)=>({
        url:`https://imdb-api.com/ru/API/Title/${import.meta.env.VITE__APP_API_KEY}/${id}/Trailer,`
      })
    }),
    searchMovie:build.query<IMovieListSearch,{title:string,genres:string[],groups:string[]}>({
      query:(arg)=>{
        const title = arg.title;
        const genres = arg.genres.join(',').toLocaleLowerCase().replace(/[- ]/,'_');
        const groups = arg.groups.join(',').toLocaleLowerCase().replace(/[- ]/,'_');
        const params = {
          title,genres,groups
        }
        return {
          url:`https://imdb-api.com/API/AdvancedSearch/${import.meta.env.VITE__APP_API_KEY}`,
          params:params,
        }
      }
    })
  })
});