import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterStore';
import watchlistReducer from './WatchListStore';
import moviesReducer from './MoviesStore';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    watchList: watchlistReducer,
    movieList: moviesReducer,
  },
})