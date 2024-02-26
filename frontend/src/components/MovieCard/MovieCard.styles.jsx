import styled from 'styled-components';

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
`;

export const FlipCardBack = styled(FlipCardFront)`
  transform: rotateY(180deg);
  background-color: var(--primary-color-light);
  box-shadow: 0 5px 15px var(--primary-color-light);
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
  bottom: 10px;
  width: 100%;
  background-color: var(--primary-color);
  color: var(--text-dark);
  color: bold;
  padding: 5px;
  text-align: center;
  font-size: 1.4rem;
`;

export const BackTitle = styled(Title)`
  position: absolute;
  padding: 7px 7px; 
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
  transition: background-color 0.3s ease, transform 0.3s ease; /* Add transition effect for smooth color and position change */

  &:hover {
    background-color: var(--primary-color-light); /* Change background color on hover */
    transform: translateY(-1px); /* Move the button up by 1px when hovered over */
  }
`;