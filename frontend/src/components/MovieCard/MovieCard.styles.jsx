import styled from 'styled-components';

<<<<<<< HEAD
export const Card = styled.div`
  width: 150px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  perspective: 1000px;
`;

export const Poster = styled.img`
  width: 150px;
  height: 250px;
`;

export const PosterBack = styled(Poster)`
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 250px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
`;

export const Details = styled.div`
  padding: 10px;
  color: white;
`;

export const Button = styled.button`
  border: none;
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 8px);
`;
=======
export const FlipCard = styled.div`
  perspective: 1000px;
  width: 200px;
  height: 300px;
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ $isFlipped }) => $isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
`;

export const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: var(--primary-color);
  box-shadow: 0 5px 15px var(--text-dark);
`;

export const FlipCardBack = styled(FlipCardFront)`
  transform: rotateY(180deg);
  background-color: var(--primary-color-light);
  box-shadow: 0 5px 15px var(--text-dark);
   
`;export const PosterB = styled.div`
background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;  
  height: 100%;  

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:var(--primary-color-light);
    mix-blend-mode:  screen;
    opacity: 0.9;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Year = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: var(--primary-color);
  color: var(--text-dark);
  color: bold;
  padding: 5px;
  border-radius: 5px;
  font-size: 1.4rem;
`;

export const Rating = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--primary-color);
  color: var(--text-dark);
  color: bold;
  padding: 5px;
  border-radius: 5px;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`;

export const StarIcon = styled.span`
  color: yellow;
  margin-right: 3px;  
`;


export const Title = styled.div`
  position: absolute;
  height: 27px;
  bottom: 0px;
  width: 100%;
  background-color: var(--primary-color);
  color: var(--text-dark);
  color: bold;
  padding: 2px;
  text-align: center;
  font-size: 1.5rem;
  overflow: hidden;  
  white-space: nowrap;  
  text-overflow: ellipsis;
`;

export const BackTitle = styled(Title)`
  position: absolute;
  padding: 2px 2px; 
`;

export const DetailsButton = styled.button`
  border: none;
  background-color: var(--primary-color);
  color: var(--text-dark);
  color: bold;
  padding: 7px 7px; 
  width: 95px;
  border-radius: 0px;
  text-transform: uppercase;
  cursor: pointer;
  position: absolute;
  bottom: 150px;
  left: 0;
  right: 0;
  margin: 0 auto;  
  z-index: 1;
  transition: background-color 0.3s ease, transform 0.3s ease;  

  &:hover {
    background-color: var(--primary-color-light);  
    transform: translateY(-1px);  
  }
`;
>>>>>>> bb90b1ecba24f5e300258f29b84c2630b2007314
