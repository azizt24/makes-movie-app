import styled from 'styled-components';

export const MoviesContainer = styled.div`
  width: 100%;
  background: rgb(82, 71, 99);
  height: fit-content;
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  margin-top: 30px;
  padding: 10px;
  @media (max-width: 768px) {
    gap: 10px;
    padding: 3px;
  }
`;
