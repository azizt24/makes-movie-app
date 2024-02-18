import MoviesButtons from '../../components/MoviesButtons/MoviesButtons';
import MoviesTitle from '../../components/MoviesTitle/MoviesTitle';
import Pagination from '../../components/Pagination/Pagination';
import { latestMovies } from './../../data/latestMovies';
import { MoviesContainer } from './MoviesPage.style';
import { HighestRatedMovies } from './../../data/HighestRatedMovies';
const MoviesPage = () => {
  const handleLatestMovies = () => {
    return latestMovies;
  };

  const handleHighestRated = () => {
    return HighestRatedMovies;
  };

  return (
    <MoviesContainer>
      <MoviesTitle />
      <MoviesButtons
        onLatestMovies={handleLatestMovies}
        onHighestRated={handleHighestRated}
      />
      <Pagination />
    </MoviesContainer>
  );
};

export default MoviesPage;
