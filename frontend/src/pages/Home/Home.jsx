import { MoviesList, MoviesButtons, Carousel } from '../../features/movies';
import { useFetch } from '../../features/movies/hooks/useFetch';
import { useState } from 'react';
import {
  ButtonsContainer,
  HomeContainer,
  Title,
  SubTitle,
} from './Home.styles';

const Home = () => {
  const [displayLatest, setDisplayLatest] = useState(true);

  const { data: carouselMovies, isPending: isPendingCarousel } = useFetch(
    `${import.meta.env.VITE_BACKEND_URL}movies/home-carousel`,
    'home-carousel'
  );
  const { data: latestMovies, isPending: isPendingLatest } = useFetch(
    `${import.meta.env.VITE_BACKEND_URL}movies/latest/page/1`,
    'latestMovies'
  );
  const { data: highestRatedMovies, isPending: isPendingHighestRated } =
    useFetch(
      `${import.meta.env.VITE_BACKEND_URL}movies/highest-rated/page/1`,
      'highestRatedMovies'
    );

  const handleLatestClick = () => setDisplayLatest(true);
  const handleHighestRatedClick = () => setDisplayLatest(false);

  if (isPendingLatest || isPendingHighestRated || isPendingCarousel) {
    // TODO - show spinner
    return <div>Pending...</div>;
  }

  return (
    <HomeContainer>
      <Carousel movies={carouselMovies} />
      <Title>Welcome to Movie Finder</Title>
      <SubTitle>Discover and watch</SubTitle>
      <ButtonsContainer>
        <MoviesButtons
          onLatestMovies={handleLatestClick}
          onHighestRated={handleHighestRatedClick}
        />
      </ButtonsContainer>
      {displayLatest
        ? latestMovies && <MoviesList movies={latestMovies.movies} />
        : highestRatedMovies && (
            <MoviesList movies={highestRatedMovies.movies} />
          )}
    </HomeContainer>
  );
};

export default Home;
