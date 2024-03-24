import styled from 'styled-components';

export const HomeContainer = styled.div`
  background-color: var(--secondary-color);
  width: 100%;
  height: auto;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;  

  @media (max-width: 768px) {
    min-height: auto;  
    padding: 20px;
  }
`;


export const Title = styled.h1`
margin-top: 5rem;
  color: var(--text-white);
`;

export const SubTitle = styled.h2`
  color: var(--primary-color);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
 
`;



export const Link = styled.a`
  color: var(--primary-color);
  text-decoration: none;
`;

export const MovieCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;


export const CarouselContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
