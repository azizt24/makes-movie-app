import { useState } from 'react'; // Import useState from React
import MoviesButtons from '../../components/MoviesButtons/MoviesButtons';
import MoviesTitle from '../../components/MoviesTitle/MoviesTitle';
import Pagination from '../../components/Pagination/Pagination';
import MovieCard from '../../components/MovieCard/MovieCard';
import { MoviesContainer, MovieGrid } from './MoviesPage.style';
import { HighestRatedMovies } from './../../data/HighestRatedMovies';
import { latestMovies } from './../../data/latestMovies';

const MoviesPage = () => {
  const [displayLatest, setDisplayLatest] = useState(true);

  const handleLatestClick = () => {
    setDisplayLatest(true);
  };

  const handleHighestRatedClick = () => {
    setDisplayLatest(false);
  };

  const moviesToDisplay = displayLatest ? latestMovies : HighestRatedMovies;

  return (
    <MoviesContainer>
      <MoviesTitle title="movies" />
      <MoviesButtons
        onLatestMovies={handleLatestClick}
        onHighestRated={handleHighestRatedClick}
      />
      <Pagination />
      <MovieGrid className="movie-grid">
        {moviesToDisplay.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    </MoviesContainer>
  );
};

export default MoviesPage;
