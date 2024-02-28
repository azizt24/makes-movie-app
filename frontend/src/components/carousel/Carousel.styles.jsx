import styled from 'styled-components';
import Slider from 'react-slick';



export const CarouselStyling = styled(Slider)`
  width: 1506px;   
  height: 500px;   


  margin-top: 2rem;
  position: relative;
  overflow: hidden;  

  .carousel-slide {
    position: relative;
     
  }

  .carousel-image {
    width: 100%;   
    height: 400px;   
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
    text-align: left;
    width: 700px;
     
    
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
    width: 660px;  
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
    margin-top: 5px;
    margin-left : 5px
    
  }

  .carousel-star {
    color: #ffd700;
    margin-right: 5px;
    font-size: 2rem;
  }

  .slick-arrow {
    font-size: 2rem;
    position: ;
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
height:37px;
width:104px;

border: none;
  background-color: var(--primary-color);
  color: ${props => props.white ? 'var(--text-white)' : 'var(--text-dark)'};
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  order: -1
  &:hover {
    background-color: var(--primary-color-light);
    transform: translateY(-1px);
  }
`;
