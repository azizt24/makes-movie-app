import React from 'react';
import './MovieSlide.css'; // Make sure to create this CSS file for styles

function MovieSlide({ movie }) {
  // Destructure properties from movie and provide default values to avoid undefined errors
  const {
    title = '',
    plot = '',
    year = '',
    rating = '',
    backgroundImg = ''
  } = movie || {}; // Also ensure movie itself is not undefined

  return (
    <div className="movie-slide" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="movie-slide-content">
        <h3 className="movie-title">{title.length > 35 ? title.substring(0, 35) + '...' : title}</h3>
        <p className="movie-plot">{plot.length > 200 ? plot.substring(0, 200) + '...' : plot}</p>
        <div className="movie-info">
          <span className="movie-year">{year}</span>
          <span className="movie-rating">{rating}</span>
        </div>
        <button className="movie-details-button">Details</button>
      </div>
    </div>
  );
}

export default MovieSlide;
