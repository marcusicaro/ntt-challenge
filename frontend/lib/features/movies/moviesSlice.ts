import { createAppSlice } from '@/lib/createAppSlice';
import { AppThunk } from '@/lib/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchMovie } from './moviesApi'; // Change to fetchMovie for fetching a single movie

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
  movie: Movie;
}

const initialState: MovieState = {
  movie: {
    Title: '',
    Year: '',
    Rated: '',
    Released: '',
    Runtime: '',
    Genre: '',
    Director: '',
    Writer: '',
    Actors: '',
    Plot: '',
    Language: '',
    Country: '',
    Awards: '',
    Poster: '',
    Ratings: [],
    Metascore: '',
    imdbRating: '',
    imdbVotes: '',
    imdbID: '',
    Type: '',
    DVD: '',
    BoxOffice: '',
    Production: '',
    Website: '',
    Response: '',
  },
};

export const movieSlice = createAppSlice({
  name: 'movie',
  initialState,
  reducers: (builder) => ({
    setMovie: builder.reducer((state, action: PayloadAction<Movie>) => {
      // This will replace the current state with the new movie
      state.movie = action.payload;
    }),
    clearMovie: builder.reducer((state) => {
      // This will reset the state to the initial state
      state.movie = initialState.movie;
    }),
  }),
  selectors: {
    selectMovie: (state) => state.movie,
  },
});

export const fetchMovieThunk =
  (movieName: string): AppThunk =>
  async (dispatch) => {
    const movie = await fetchMovie(movieName); // Change to fetchMovie for fetching a single movie
    dispatch(setMovie(movie));
  };

export const { setMovie, clearMovie } = movieSlice.actions;
export const { selectMovie } = movieSlice.selectors;
