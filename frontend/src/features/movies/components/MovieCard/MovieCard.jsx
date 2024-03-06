import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FlipCard,
  FlipCardInner,
  FlipCardFront,
  FlipCardBack,
  PosterB,
  Poster,
  StarIcon,
  Year,
  Rating,
  Title,
  DetailsButton,
  BackTitle,
} from './MovieCard.styles';

const MovieCard = ({ movie }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();
  const { id, title, image, year, rating } = movie;
  const navigateToMovie = () => {
    navigate(`/movies/${id}`);
  };
  return (
    <FlipCard
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <FlipCardInner $isFlipped={isFlipped}>
        <FlipCardFront>
          <Poster src={image} alt={title} />
          <Year>{year}</Year>
          <Rating>
            <StarIcon>★</StarIcon> {rating}
          </Rating>
          <Title>{title}</Title>
        </FlipCardFront>
        <FlipCardBack>
          <PosterB src={image} alt={title} />
          <DetailsButton onClick={navigateToMovie}>Details</DetailsButton>
          <BackTitle>{title}</BackTitle>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  );
};

export default MovieCard;
