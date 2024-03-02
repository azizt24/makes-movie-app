import styled from 'styled-components';

export const HomeContainer = styled.div`
  background-color: var(--secondary-color);
  width: 100%;
  height: auto; /* Adjust the height based on content */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Minimum height to at least cover the viewport */

  @media (max-width: 768px) {
    min-height: auto; /* Allow container to adjust based on content */
    padding: 20px;
  }
`;


export const Title = styled.h1`
margin-top: 5px;
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

export const MovieGrid = styled.div`
display: flex;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 50px;
  width: 90%;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: var(--secondary-color);
  justify-content: center;
    flex-wrap: wrap;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
  }
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
