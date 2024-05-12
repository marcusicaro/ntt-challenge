'use client';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import styles from './Movies.module.scss';
import { Button } from '@ui5/webcomponents-react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Rating } from 'react-simple-star-rating';
import {
  fetchMovieThunk,
  selectMovie,
} from '@/lib/features/movies/moviesSlice';

export const Movies = () => {
  const [movieName, setMovieName] = useState('Batman');
  const [inputValue, setInputValue] = useState('Batman');
  const dispatch = useAppDispatch();
  const movie = useAppSelector(selectMovie);
  let movieScore = (Number(movie.Metascore) * 5) / 100;

  useEffect(() => {
    dispatch(fetchMovieThunk(movieName));
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

  function roundToHalf(value: number) {
    return Math.round(value * 2) / 2;
  }

  return (
    <div className={styles['main-content']}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Title</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          atque totam dignissimos tempore natus accusamus distinctio, quasi,
          placeat eius corporis magni cumque dolorum doloremque id, impedit
          animi sed! Tempora, voluptatum.
        </p>
      </div>
      <div className={styles['search-container']}>
        <input
          className={styles['txt-input']}
          type='text'
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button
          className={styles['search-container-btn']}
          suppressHydrationWarning={true}
          onClick={handleSearchClick}
        >
          Search
        </Button>
        <Button
          className={styles['search-container-btn']}
          suppressHydrationWarning={true}
          onClick={handleResetClick}
        >
          Reset
        </Button>
      </div>

      <div className={styles.row}>
        {movie.Title ? (
          <div className={styles.movie}>
            <div
              className={styles['movie-txt']}
              suppressHydrationWarning={true}
            >
              <h2>{movie.Title}</h2>
              <p>{movie.Plot}</p>
              <p>
                <b>Actors: </b>
                {movie.Actors}
              </p>
              <div>
                <b>Rating: </b>
                <Rating
                  iconsCount={5}
                  initialValue={roundToHalf(movieScore)}
                  allowFraction={true}
                />
              </div>

              <Button>
                Favorite <FontAwesomeIcon icon={faHeart} />
              </Button>
            </div>

            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ) : (
          <div>Movie not found</div>
        )}
      </div>
    </div>
  );
};
