import styled from 'styled-components';
import Slider from 'react-slick';

export const CarouselStyling = styled(Slider)`
  width: 100%;

  z-index: 0;
  padding: 0 10%;

  margin-top: 7%;
  position: relative;
  overflow: visible;
  @media screen and (max-width: 1200px) {
    padding: 0 3%;
  }
  @media screen and (max-width: 700px) {
    padding: 0 3%;
    margin-top: 7%;
  }
  /* @media screen and (max-width: 768px) {
    padding: 0 2rem; 
  }

  @media screen and (max-width: 500px) {
    padding: 0 1rem; 
    margin-top:0;
  } */
  .carousel-slide {
    position: relative;
  }

  .carousel-image {
    width: 100%;
    height: 40rem;

    object-fit: cover;
  }

  .carousel-caption {
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: var(--text-white);
    padding: 20px;
    border-radius: 8px;
    text-align: left;
    width: 80%;
    line-height: 1;
    @media screen and (max-width: 700px) {
    }
  }

  .movie-details-box {
    display: flex;
    flex-direction: column;
    overflow: auto;
    word-wrap: break-word;
  }

  .carousel-title {
    font-size: 1rem;
    margin: 0;
    color: var(--text-white);
    z-index: 10;
  }

  .carousel-description {
    font-size: 1.5rem;
    margin-top: 5px;
    color: var(--text-white);
    overflow: auto;
    width: 80%;
    height: 40px;
    line-height: 30px;
    overflow: hidden;

    height: auto;
    line-height: 30px;

    padding: 0 10px;
    @media screen and (max-width: 700px) {
      font-size: 1.2rem;
      width: 100%;
    }
  }

  .details-footer {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .year {
    color: var(--text-white);
    font-size: 1.5rem;
    margin-top: 5px;
    @media screen and (max-width: 700px) {
      font-size: 1.2rem;
    }
  }

  .carousel-rating {
    font-size: 1.5rem;
    margin-top: 5px;
    margin-left: 5px;
    @media screen and (max-width: 700px) {
      font-size: 1.2rem;
    }
  }

  .carousel-star {
    color: #ffd700;
    margin-right: 5px;
    font-size: 2rem;
  }

  .slick-arrow {
    font-size: 2rem;
    display: none;
    @media screen and (max-width: 600px) {
      display: none !important;
    }
    /* position: absolute;
  top: 50%;
  z-index: 99;
  transform: translateY(-50%); */
  }

  .slick-prev {
    position: absolute;
    top: 50%;
    left: 11%;
    z-index: 99;

    @media screen and (max-width: 1200px) {
      left: 7%;
    }
  }

  .slick-next {
    /* right: 25px;
    color: var(--primary-color); */
    position: absolute;
    top: 50%;

    right: 11%;
    z-index: 99;
    @media screen and (max-width: 600px) {
      display: none !important;
      /* left:-18px; */
    }
    /* @media screen and (max-width: 1300px){
      right:0;
    } */
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
  height: 37px;
  width: 104px;

  border: none;
  background-color: var(--primary-color);
  color: ${props => (props.white ? 'var(--text-white)' : 'var(--text-dark)')};
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  order: -1;
  &:hover {
    background-color: var(--primary-color-light);
    transform: translateY(-1px);
  }
  @media screen and (max-width: 700px) {
    font-size: 1.2rem;
  }
`;
