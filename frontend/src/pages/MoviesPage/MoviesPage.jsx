import MoviesButtons from '../../components/MoviesButtons/MoviesButtons';
import MoviesTitle from '../../components/MoviesTitle/MoviesTitle';
import { MoviesContainer } from './MoviesPage.style';
const MoviesPage = () => {
  return (
    <MoviesContainer>
      <MoviesTitle />
      <MoviesButtons />
    </MoviesContainer>
  );
};
export default MoviesPage;
