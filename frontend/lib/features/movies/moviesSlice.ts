import { createAppSlice } from '@/lib/createAppSlice';
import { AppThunk } from '@/lib/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchMovies } from './moviesApi';

export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface MovieState {
  movies: Movie[];
}

const initialState: MovieState = {
  movies: [],
};

export const movieSlice = createAppSlice({
  name: 'movie',
  initialState,
  reducers: (create) => ({
    setMovies: create.reducer((state, action: PayloadAction<Movie[]>) => {
      // This will replace the current state with the new movies
      state.movies = action.payload;
    }),
    addMovie: create.reducer((state, action: PayloadAction<Movie>) => {
      // This will add a new movie to the state
      state.movies.push(action.payload);
    }),
    clearMovies: create.reducer((state) => {
      // This will reset the state to the initial state
      state.movies = [];
    }),
  }),
  selectors: {
    selectMovies: (state) => state.movies,
  },
});

export const fetchMoviesThunk =
  (movieName: string): AppThunk =>
  async (dispatch) => {
    const movies = await fetchMovies(movieName);
    dispatch(setMovies(movies));
  };

export const { setMovies, addMovie, clearMovies } = movieSlice.actions;
export const { selectMovies } = movieSlice.selectors;
