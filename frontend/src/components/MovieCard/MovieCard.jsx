import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card, Poster, PosterBack, Details, Button } from './MovieCard.styles'; //

const MovieCard = ({ movie }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const { title, backdrop_path, release_date, vote_average } = movie;
  const posterUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  const defaultPoster = '/path/to/default/poster.jpg';

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card onClick={handleFlip}>
        <Poster src={backdrop_path ? posterUrl : defaultPoster} alt={title} />
        <Details>
          <h3>{title}</h3>
          <p>{release_date}</p>
          <div>
            <span>{vote_average}</span>
            <span>★</span>
          </div>
        </Details>
      </Card>

      <Card onClick={handleFlip}>
        <PosterBack
          src={backdrop_path ? posterUrl : defaultPoster}
          alt={title}
        />
        <Button>Details</Button>
      </Card>
    </ReactCardFlip>
  );
};

export default MovieCard;
