import styled from 'styled-components';
import Slider from 'react-slick';

export const CarouselStyling = styled(Slider)`
  & .slick-arrow {
    font-size: 2rem;
  }

  & .slick-arrow.slick-prev {
    position: absolute;
    top: 50%;
    left: 5px;
    z-index: 99;
  }

  & .slick-arrow.slick-next {
    position: absolute;
    top: 50%;
    right: 15px;
    z-index: 99;
  }

  & .slick-next::before,
  & .slick-prev::before {
    font-size: 3rem;
    color: ${props => props.color};
  }

  & .slick-dots {
    /* Additional styles if needed */
  }

  & .slick-dots li.slick-active button:before {
    opacity: 0.8;
    color: ${props => props.activeDotColor};
  }

  & .slick-dots li button:before {
    opacity: 0.5;
    color: white;
  }

  .slick-list {
    margin: 0 -1px;
  }
`;
