import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from '../../components/carousel/Carousel';
import MovieCard from '../../components/MovieCard/MovieCard';
import MoviesButtons from '../../components/Button/MoviesButtons';
import Footer from '../../components/layout/Footer/Footer'; // Import Footer component
import { Content, ButtonsContainer, MovieGrid, HomeContainer, Title, SubTitle } from './Home.styles';

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
    <HomeContainer>
      <Content>
        <Carousel movies={displayLatest ? latestMovies : highestRatedMovies} />
        <Title>Welcome to Movie Finder</Title>
        <SubTitle>Discover and watch</SubTitle>
        <ButtonsContainer>
          <MoviesButtons onLatestMovies={handleLatestClick} onHighestRated={handleHighestRatedClick} />
        </ButtonsContainer>
      </Content>
      <MovieGrid>
        {displayLatest
          ? latestMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          : highestRatedMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        }
      </MovieGrid>
      <Footer /> {/* Include Footer component below the MovieGrid */}
    </HomeContainer>
  );
};

export default Home;
