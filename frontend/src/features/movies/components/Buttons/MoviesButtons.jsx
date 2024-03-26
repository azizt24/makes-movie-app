import { useState } from 'react';
import { MoviesButtonsContainer, MoviesBtn } from './MoviesButtons.style';

const MoviesButtons = ({ onLatestMovies, onHighestRated }) => {
  
  const [activeBtn, setActiveBtn] = useState('latest');

  const handleLatestMoviesClick = () => {
    setActiveBtn('latest');
    onLatestMovies();
  };

  const handleHighestRatedClick = () => {
    setActiveBtn('highestRated');
    onHighestRated();
  };

  return (
    <MoviesButtonsContainer>
      <MoviesBtn 
        onClick={handleLatestMoviesClick} 
        className={activeBtn === 'latest' ? 'active' : ''}
      >
        Latest Movies
      </MoviesBtn>
      <MoviesBtn 
        onClick={handleHighestRatedClick} 
        className={activeBtn === 'highestRated' ? 'active' : ''}
      >
        Highest Rated
      </MoviesBtn>
    </MoviesButtonsContainer>
  );
};

export default MoviesButtons;
