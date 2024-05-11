'use client';
import { useEffect, useState } from 'react';
import {
  fetchMoviesThunk,
  selectMovies,
} from '@/lib/features/movies/moviesSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import styles from './Movies.module.scss';
import { Button } from '@ui5/webcomponents-react';

export const Movies = () => {
  const [movieName, setMovieName] = useState('Batman');
  const [inputValue, setInputValue] = useState('Batman');
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectMovies);

  useEffect(() => {
    dispatch(fetchMoviesThunk(movieName));
  }, [dispatch, movieName]); // Add movieName as a dependency

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    setMovieName(inputValue);
  };

  const handleResetClick = () => {
    setInputValue('');
  };

  return (
    <div>
      <div className={styles['hero']}>
        <h1 className={styles.title}>Title</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          atque totam dignissimos tempore natus accusamus distinctio, quasi,
          placeat eius corporis magni cumque dolorum doloremque id, impedit
          animi sed! Tempora, voluptatum.
        </p>
      </div>
      <div className={styles['search-container']}>
        <input type='text' value={inputValue} onChange={handleInputChange} />
        <Button suppressHydrationWarning={true} onClick={handleSearchClick}>
          Search
        </Button>
        <Button suppressHydrationWarning={true} onClick={handleResetClick}>
          Reset
        </Button>
      </div>

      <div className={styles.row}>
        {movies.map((movie, index) => (
          <div key={index} className={styles.movie}>
            <h2>{movie.Title}</h2>
            <p>{movie.Plot}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
