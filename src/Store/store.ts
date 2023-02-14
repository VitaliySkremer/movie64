import {configureStore} from "@reduxjs/toolkit";
import {movieApi} from "../services/movie";
import movieReducer from './slices/movieIdSlice'
import parametersSearch from './slices/searchSlice'

export const store = configureStore({
  reducer:{
    movieId: movieReducer,
    parametersSearch: parametersSearch,
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(movieApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;