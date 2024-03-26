import { useNavigate } from 'react-router-dom';
import { CarouselStyling, DetailsButton } from './Carousel.styles';

const CarouselComponent = ({ movies }) => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };
  const plotDetails = (plot) => {
    if (plot.length > 100) {
      return plot.slice(0, 100) + '...';
    }
    return plot;
  };
  return (
    <CarouselStyling {...settings}>
      {movies &&
        movies.map(movie => (
          <div key={movie.id} className="carousel-slide">
            <img
              src={movie.image}
              alt={movie.title}
              className="carousel-image"
            />

            <div className="carousel-caption">
              <div className="movie-details-box">
                <h3 className="carousel-title">{movie.title}</h3>
                <p className="carousel-description">{plotDetails(movie.overview)}</p>
              </div>
              <div className="details-footer">
                <DetailsButton
                  onClick={() => {
                    navigate(`/movies/${movie.id}`);
                  }}
                >
                  Details
                </DetailsButton>
                <span className="year">{movie.year}</span>
                <div className="carousel-rating">
                  <span className="carousel-star">★</span>
                  {movie.rating.toFixed(1)}
                </div>
              </div>
            </div>
          </div>
        ))}
    </CarouselStyling>
  );
};

export default CarouselComponent;
