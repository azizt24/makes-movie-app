// MoviesPage.style.jsx or wherever you define your styled components

import styled from 'styled-components';
import { Center } from './../../components/Spinners/Camera/Camera.styles';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  height: 95vh;
  p {
    color: #fff;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    width: 65vw;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      margin-top: 100px;
      font-size: 18px;
    }
  }
  img {
    width: 400px;
    height: 300px;
    padding-bottom: 10px;
  }

  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;
