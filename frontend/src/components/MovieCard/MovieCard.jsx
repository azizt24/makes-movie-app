import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './MovieCard.css';

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
      <div className="movie-card-front" onClick={handleFlip}>
        <img
          src={backdrop_path ? posterUrl : defaultPoster}
          alt={title}
          className="movie-poster"
        />
        <div className="movie-details">
          <h3 className="movie-title">{title}</h3>
          <p className="movie-release-date">{release_date}</p>
          <div className="movie-rating">
            <span>{vote_average}</span>
            <span className="carousel-star">★</span>
          </div>
        </div>
      </div>

      <div className="movie-card-back" onClick={handleFlip}>
        <img
          src={backdrop_path ? posterUrl : defaultPoster}
          alt={title}
          className="movie-poster-back"
        />
        <button className="details-button">Details</button>
      </div>
    </ReactCardFlip>
  );
};

export default MovieCard;
