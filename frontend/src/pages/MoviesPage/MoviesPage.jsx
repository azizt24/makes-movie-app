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
import { useNavigate } from 'react-router-dom';

const MoviesPage = () => {
  const [displayLatest, setDisplayLatest] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const { data: latestMovies, isPending: isPendingLatest } = useFetch(
    CONSTANTS.LATEST_MOVIES_URL + currentPage,
    CONSTANTS.LATEST_MOVIES_QUERY_KEY,
    CONSTANTS.QUERY_KEY_TAGS
  );
  const { data: highestRatedMovies, isPending: isPendingHighestRated } =
    useFetch(
      CONSTANTS.HIGHEST_MOVIES_URL + currentPage,
      CONSTANTS.HIGHEST_RATED_MOVIES_QUERY_KEY,
      CONSTANTS.QUERY_KEY_TAGS
    );

  const handleLatestClick = () => {
    navigate('/movies/latest/page/1');
    setDisplayLatest(true);
  };
  const handleHighestRatedClick = () => {
    setDisplayLatest(false);
  };

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
