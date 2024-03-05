import { MoviesList, MoviesButtons, Carousel } from '../../features/movies';
import {
  Carousel_URL,
  Latest_Movies_URL,
  Highest_Movies_URL,
  Use_Fetch_QueriesKeys,
} from '../../features/movies/hooks/utils/constants/constants.js';
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
    Carousel_URL,
    Use_Fetch_QueriesKeys[0]
  );
  const { data: latestMovies, isPending: isPendingLatest } = useFetch(
    Latest_Movies_URL,
    Use_Fetch_QueriesKeys[1]
  );
  const { data: highestRatedMovies, isPending: isPendingHighestRated } =
    useFetch(Highest_Movies_URL, Use_Fetch_QueriesKeys[2]);

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
