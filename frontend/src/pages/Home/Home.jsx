import { useState } from 'react';
import Carousel from '../../components/carousel/Carousel';
import MovieCard from '../../components/MovieCard/MovieCard';
import MoviesButtons from '../../components/Button/MoviesButtons';
import { useFetch } from '../../features/movies/hooks/useFetch';
import {
  ButtonsContainer,
  MovieGrid,
  HomeContainer,
  Title,
  SubTitle,
} from './Home.styles';

const Home = () => {
  const [displayLatest, setDisplayLatest] = useState(true);

  const {
    data: latestMoviesData,
    isPending: isPendingLatest,
    isError: latestIsError,
    error: latestError,
  } = useFetch(
    `${import.meta.env.VITE_BACKEND_URL}movies/latest/page/1`,
    'latestMovies'
  );
  const {
    data: highestRatedMoviesData,
    isPending: isPendingHighestRated,
    isError: highestIsError,
    error: highestError,
  } = useFetch(
    `${import.meta.env.VITE_BACKEND_URL}movies/highest-rated/page/1`,
    'highestRatedMovies'
  );

  const { latestMovies } = latestMoviesData;
  const { highestRatedMovies } = highestRatedMoviesData;

  const handleLatestClick = () => setDisplayLatest(true);
  const handleHighestRatedClick = () => setDisplayLatest(false);

  if (isPendingLatest || isPendingHighestRated) {
    return <div>Pending...</div>;
  }

  return (
    <HomeContainer>
      <Carousel movies={displayLatest ? latestMovies : highestRatedMovies} />
      <Title>Welcome to Movie Finder</Title>
      <SubTitle>Discover and watch</SubTitle>
      <ButtonsContainer>
        <MoviesButtons
          onLatestMovies={handleLatestClick}
          onHighestRated={handleHighestRatedClick}
        />
      </ButtonsContainer>
      <MovieGrid>
        {(displayLatest ? latestMovies : highestRatedMovies)?.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    </HomeContainer>
  );
};

export default Home;
