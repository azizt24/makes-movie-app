import { useState } from 'react'; // Import useState from React
import MoviesButtons from '../../components/MoviesButtons/MoviesButtons';
import MoviesTitle from '../../components/MoviesTitle/MoviesTitle';
import Pagination from '../../components/Pagination/Pagination';
import MovieCard from '../../components/MovieCard/MovieCard';
import { MoviesContainer } from './MoviesPage.style';
import './MoviesPage.css';
import { HighestRatedMovies } from './../../data/HighestRatedMovies';
import { latestMovies } from './../../data/latestMovies';

const MoviesPage = () => {
  // State to track which movies to display
  const [displayLatest, setDisplayLatest] = useState(true);

  // Handler for clicking on "Latest Movies" button
  const handleLatestClick = () => {
    setDisplayLatest(true);
  };

  // Handler for clicking on "Highest Rated" button
  const handleHighestRatedClick = () => {
    setDisplayLatest(false);
  };

  // Determine which set of movies to display based on state
  const moviesToDisplay = displayLatest ? latestMovies : HighestRatedMovies;

  return (
    <MoviesContainer>
      <MoviesTitle />
      <MoviesButtons
        onLatestMovies={handleLatestClick}
        onHighestRated={handleHighestRatedClick}
      />
      <Pagination />
      <div className="movie-grid">
        {moviesToDisplay.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </MoviesContainer>
  );
};

export default MoviesPage;
