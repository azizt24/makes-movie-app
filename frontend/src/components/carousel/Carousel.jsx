import { useState, useEffect } from 'react';
import axios from 'axios';
import { CarouselStyling, DetailsButton } from './Carousel.styles';

const CarouselComponent = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = '033a7d652a60b8f9fe88c99d78506501';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=3`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [apiKey]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
     
  };

  return (
   
    <CarouselStyling {...settings}>
      {movies.map((movie) => (
        <div key={movie.id} className="carousel-slide">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="carousel-image"
          />

<div className="carousel-caption">
  <div className="movie-details-box">
    <h3 className="carousel-title">{movie.title}</h3>
    <p className="carousel-description">{movie.overview}</p>
  </div>
  <div className="details-footer">
    <DetailsButton onClick={() => { alert('Details clicked!'); }}>Details</DetailsButton>
    <span className="year">{movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}</span>
    <div className="carousel-rating">
        <span className="carousel-star">★</span>{movie.vote_average}
    </div>
  </div>
</div>

 </div>
      ))}
 </CarouselStyling>
  
  );
};

export default CarouselComponent;
