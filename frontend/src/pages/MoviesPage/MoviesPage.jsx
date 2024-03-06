import { CONSTANTS } from '../../features/movies/hooks/utils/constants/constants.js';
import {
  MoviesList,
  MoviesButtons,
  MoviesTitle,
  Pagination,
} from '../../features/movies';
import { useFetch } from '../../features/movies/hooks/useFetch';
import { MoviesContainer } from './MoviesPage.style';
import { useState } from 'react';

const MoviesPage = () => {
  const [displayLatest, setDisplayLatest] = useState(true);

  const { data: latestMovies, isPending: isPendingLatest } = useFetch(
    CONSTANTS.LATEST_MOVIES_URL,
    CONSTANTS.LATEST_MOVIES_QUERY_KEY
  );
  const { data: highestRatedMovies, isPending: isPendingHighestRated } =
    useFetch(
      CONSTANTS.HIGHEST_MOVIES_URL,
      CONSTANTS.HIGHEST_RATED_MOVIES_QUERY_KEY
    );

  const handleLatestClick = () => setDisplayLatest(true);
  const handleHighestRatedClick = () => setDisplayLatest(false);

  if (isPendingLatest || isPendingHighestRated) {
    // TODO - show spinner
    return <div>Pending...</div>;
  }

  return (
    <MoviesContainer>
      <MoviesTitle title="movies" />
      <MoviesButtons
        onLatestMovies={handleLatestClick}
        onHighestRated={handleHighestRatedClick}
      />
      <Pagination />
      {displayLatest
        ? latestMovies && <MoviesList movies={latestMovies.movies} />
        : highestRatedMovies && (
            <MoviesList movies={highestRatedMovies.movies} />
          )}
    </MoviesContainer>
  );
};

export default MoviesPage;
