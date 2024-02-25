import { MoviesButtonsContainer, MoviesBtn } from './MoviesButtons.style';

const MoviesButtons = ({ onLatestMovies, onHighestRated }) => {
  return (
    <MoviesButtonsContainer>
      <MoviesBtn onClick={onLatestMovies}>Latest Movies</MoviesBtn>
      <MoviesBtn onClick={onHighestRated}>Highest Rated </MoviesBtn>
    </MoviesButtonsContainer>
  );
};
export default MoviesButtons;
