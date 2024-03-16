import { CONSTANTS } from '../../features/movies/utils/constants/constants.js';
import { MoviesList, MoviesButtons, Carousel } from '../../features/movies';
import { useFetch } from '../../hooks/useFetch.js';
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
    CONSTANTS.CAROUSEL_URL,
    CONSTANTS.HOME_CAROUSEL_QUERY_KEY,
    CONSTANTS.QUERY_KEY_TAGS
  );
  const { data: latestMovies, isPending: isPendingLatest } = useFetch(
    CONSTANTS.LATEST_MOVIES_URL + 1,
    CONSTANTS.LATEST_MOVIES_QUERY_KEY,
    CONSTANTS.QUERY_KEY_TAGS
  );
  const { data: highestRatedMovies, isPending: isPendingHighestRated } =
    useFetch(
      CONSTANTS.HIGHEST_MOVIES_URL + 1,
      CONSTANTS.HIGHEST_RATED_MOVIES_QUERY_KEY,
      CONSTANTS.QUERY_KEY_TAGS
    );

  const handleLatestClick = () => setDisplayLatest(true);
  const handleHighestRatedClick = () => setDisplayLatest(false);

  if (isPendingLatest || isPendingHighestRated || isPendingCarousel) {
    // TODO - Implement a better spinner or loading indicator here
    return <div>Loading...</div>;
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
