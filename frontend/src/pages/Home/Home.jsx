import { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from '../../components/carousel/Carousel';
import Button from '../../components/Button/Button';
import MovieCard from '../../components/MovieCard/MovieCard';

import './Home.css';

const Home = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  const [highestRatedMovies, setHighestRatedMovies] = useState([]);
  const [displayLatest, setDisplayLatest] = useState(true);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetchLatestMovies();
  }, []);

  const fetchLatestMovies = async () => {
    try {
      const result = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: apiKey,
          language: 'en-US',
          page: 1
        }
      });
      setLatestMovies(result.data.results);
    } catch (error) {
      console.error("Error fetching latest movies:", error);
    }
  };

  const fetchHighestRatedMovies = async () => {
    try {
      const result = await axios.get('https://api.themoviedb.org/3/discover/movie', {
        params: {
          api_key: apiKey,
          sort_by: 'vote_average.desc',
          'vote_count.gte': 1000,
          include_adult: false,
          page: 1
        }
      });
      setHighestRatedMovies(result.data.results);
    } catch (error) {
      console.error("Error fetching highest rated movies:", error);
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
    <div>
      <div className="home">
        <h1>Welcome to Movie Finder</h1>
        <h2>Discover and watch</h2>
        <div className="container">
          <Carousel movies={displayLatest ? latestMovies : highestRatedMovies} />
          <div className="movie-buttons">
            <Button onClick={handleLatestClick} text="Latest Movies" />
            <Button onClick={handleHighestRatedClick} text="Highest Rated" />
          </div>
          <div className="movie-grid">
            {displayLatest
              ? latestMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
              : highestRatedMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
