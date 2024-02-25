
import MoviesTitle from '../../components/MoviesTitle/MoviesTitle';
import { MoviesContainer } from './MoviesPage.style';
import Pagination from '../../components/Pagination/Pagination';

const MoviesPage = () => {
  return (
    <MoviesContainer>
      <MoviesTitle />
      <Pagination />
    </MoviesContainer>
  );
};

export default MoviesPage;

