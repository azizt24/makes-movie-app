import { MoviesButtonsContainer, MoviesBtn } from './MoviesButtons.style';
const MoviesButtons = () => {
  return (
    <MoviesButtonsContainer>
      <MoviesBtn>latest movies</MoviesBtn>
      <MoviesBtn>Highest rated</MoviesBtn>
    </MoviesButtonsContainer>
  );
};
export default MoviesButtons;
