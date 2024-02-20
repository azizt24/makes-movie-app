import MoviesButtons from '../../components/MoviesButtons/MoviesButtons';
import MoviesTitle from '../../components/MoviesTitle/MoviesTitle';
import Pagination from '../../components/Pagination/Pagination';
import MovieCard from '../../components/MovieCard/MovieCard';
import { MoviesContainer } from './MoviesPage.style';
import { useState, useEffect } from 'react';
import './MoviesPage.css';
import axios from 'axios';
import { HIGHEST_RATED_MOVIES, LATEST_MOVIES_URL } from './constants';

const MoviesPage = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  const [highestRatedMovies, setHighestRatedMovies] = useState([]);
  const [displayLatest, setDisplayLatest] = useState(true);

  useEffect(() => {
    fetchLatestMovies();
  }, []);

  const fetchLatestMovies = async (page = 1) => {
    try {
      const result = await axios.get(`${LATEST_MOVIES_URL}${page}`);
      setLatestMovies(result.data.results);
    } catch (error) {
      console.error('Error fetching latest movies:', error);
    }
  };

  const fetchHighestRatedMovies = async (page = 1) => {
    try {
      const result = await axios.get(`${HIGHEST_RATED_MOVIES}${page}`);
      setHighestRatedMovies(result.data.results);
    } catch (error) {
      console.error('Error fetching highest rated movies:', error);
    }
  };

  const handleLatestClick = async () => {
    await fetchLatestMovies();
    setDisplayLatest(true);
  };

  const handleHighestRatedClick = async () => {
    await fetchHighestRatedMovies();
    setDisplayLatest(false);
  };

  return (
    <MoviesContainer>
      <MoviesTitle />
      <MoviesButtons
        onLatestMovies={handleLatestClick}
        onHighestRated={handleHighestRatedClick}
      />
      <Pagination />
      <div className="movie-grid">
        {displayLatest
          ? latestMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          : highestRatedMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
      </div>
    </MoviesContainer>
  );
};

export default MoviesPage;
