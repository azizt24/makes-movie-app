import styled from 'styled-components';
import Slider from 'react-slick';

export const CarouselStyling = styled(Slider)`
  max-width: 100%;
  margin: auto;
  padding: 5px 10%;
  width: 1300px;
  height: 400px;
  margin-top: 2rem;
  position: relative;  

  .carousel-slide {
    position: relative;
  }

  .carousel-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .carousel-caption {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: var(--text-white);
    padding: 20px;
    text-align: left;
    width: 700px;
  }

  .movie-details-box {
    display: flex;
    flex-direction: column;
  }

  .carousel-title {
    font-size: 1.5rem;
    margin: 0;
    color: var(--text-white);
    z-index: 10;
  }

  .carousel-description {
    font-size: 1.2rem;
    margin-top: 5px;
    color: var(--text-white); /* Added color */
  }

  .details-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  .year {
    color: var(--text-white);
  }

  .carousel-rating {
    font-size: 2rem;
    margin-top: 5px;
  }

  .carousel-star {
    color: #ffd700;
    margin-right: 5px;
  }

  .slick-arrow {
    font-size: 2rem;
    position: absolute;
    top: 50%;
    z-index: 99;
  }

  .slick-prev {
    left: 5px;
    transform: translateX(900%);
  }

  .slick-next {
    right: 15px;
    transform: translateX(-900%);
  }

  .slick-prev::before,
  .slick-next::before {
    font-size: 3rem;
    color: ${props => props.color};
  }

  .slick-list {
    margin: 0 -1px;
  }
`;

export const DetailsButton = styled.button`
  border: none;
  background-color: var(--primary-color);
  color: ${props => props.white ? 'var(--text-white)' : 'var(--text-dark)'};
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: var(--primary-color-light);
    transform: translateY(-1px);
  }
`;
