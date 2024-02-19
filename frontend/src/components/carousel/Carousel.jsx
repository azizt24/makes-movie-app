import  { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import './carousel.styles.css'; 
import Button from '../Button/Button'

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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };
  

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="carousel-slide">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="carousel-image"
            />
            
            <div className="carousel-caption">
              <h3>{movie.title}</h3>
              <p className="carousel-rating">{movie.vote_average} <span className="carousel-star">★</span></p>
              <p>{movie.overview}</p>
            <Button onClick={() => { alert('Details clicked!'); }} text="Details" />
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
