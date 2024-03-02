import   { useState } from 'react';
import { FlipCard,  FlipCardInner, FlipCardFront, FlipCardBack, PosterB,  Poster, StarIcon, Year,  Rating,  Title,  DetailsButton,BackTitle} from './MovieCard.styles';  

const MovieCard = ({ movie }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { title, poster_path , release_date, vote_average } = movie;
  const posterUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '/path/to/default/poster.jpg';
  const year = release_date ? new Date(release_date).getFullYear() : 'N/A';

  return (
    <FlipCard onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
      <FlipCardInner $isFlipped={isFlipped}>
        <FlipCardFront>
          <Poster src={posterUrl} alt={title} />
          <Year>{year}</Year>
          <Rating>
  <StarIcon>★</StarIcon> {vote_average.toFixed(1)}
          </Rating>
          <Title>{title}</Title>
        </FlipCardFront>
        <FlipCardBack>
          <PosterB src={posterUrl} alt={title}  />
          <DetailsButton>Details</DetailsButton>
          <BackTitle>{title}</BackTitle>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  );
};

export default MovieCard;
