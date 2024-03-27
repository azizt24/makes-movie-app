// MoviesPage.style.jsx or wherever you define your styled components

import styled from 'styled-components';

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: flex;
  align-items: center;
  justify-content: start;
  padding: 20px;
  gap: 20px;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  margin-top: 30px;
  padding: 10px;
  height: 100%;
  @media (max-width: 768px) {
    gap: 10px;
    padding: 3px;
  }
`;

export const NoResultsMessage = styled.div`
  color: red;
  font-size: 30px;
  text-align: center;
  height: 95vh;
  padding-top: 200px;
  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;
