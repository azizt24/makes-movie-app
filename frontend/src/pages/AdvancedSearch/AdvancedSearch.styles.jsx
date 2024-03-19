import styled from 'styled-components';

export const SearchContainer = styled.div`
  background-color: var(--secondary-color);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const SearchForm = styled.form`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieCard = styled.div`
  width: 200px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
`;

export const MovieImage = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const MovieTitle = styled.h3`
  font-size: 18px;
  color: #333;
`;

export const MovieYear = styled.p`
  font-size: 16px;
  color: #666;
`;
