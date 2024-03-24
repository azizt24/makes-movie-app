import styled from 'styled-components';
import Slider from 'react-slick';



export const CarouselStyling = styled(Slider)`
  width: 1506px;   
  height: 500px;   
  z-index: 0;
  position: fixed;
  margin-top: 10rem;
  position: relative;
  overflow: hidden;  

  .carousel-slide {
    position: relative;
     
  }

  .carousel-image {
    width: 100%;   
    height: 500px;   
    object-fit: cover;  
  }

  .carousel-caption {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: var(--text-white);
    padding: 20px;
    border-radius: 8px;
    text-align: left;
    width: 80%;
     
    
  }

  .movie-details-box {
    display: flex;
    flex-direction: column;
    overflow: auto;
    word-wrap: break-word;
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
    color: var(--text-white);
    overflow : auto;
    width: 100%;  
  height: 40px;  
  line-height: 30px;  
  overflow: hidden;  
  white-space: nowrap;  
  text-overflow: ellipsis;  
   
  padding: 0 10px; 
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
  }

  .carousel-rating {
    font-size: 1.5rem;
    margin-left : 5px
    
  }

  .carousel-star {
    color: #ffd700;
    margin-right: 5px;
    font-size: 2rem;
  }

  .slick-arrow {
     
     
  position: absolute;
  top: 50%;
  z-index: 99;
  transform: translateY(-50%);
  
   
   
  }

  .slick-prev {
    left: 25px;
     
    color: var(--primary-color);
  }

  .slick-next {
    right: 25px;
    color: var(--primary-color);
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
height:37px;
width:104px;
 border: none;
  background-color: var(--primary-color);
  color: bold;
  padding: 7px 7px;
  width: 95px;
  border-radius: 0px;
  margin-right: 1rem ;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 1;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: var(--primary-color-light);
    transform: translateY(-1px);
  }

  color: ${props => props.white ? 'var(--text-white)' : 'var(--text-dark)'};
  
`;


