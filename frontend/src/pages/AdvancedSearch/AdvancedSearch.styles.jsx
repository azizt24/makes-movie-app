import styled from 'styled-components';

export const SearchContainer = styled.div`
  background-color: var(--secondary-color);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  column-gap: 7.2px;
  max-width: 1100px;
  margin: 10px auto;
  height: 10vh;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: fit-content;
  }
`;

export const StyledLabel = styled.label`
  padding: 0.5rem;
  border: 3px solid;
  border-color: var(--primary-color);
  margin-right: 1rem;
  height: 36px;
  width: 150px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  @media screen and (min-width: 769px) and (max-width: 1000px) {
    width: 100px;
  }
  @media (max-width: 768px) {
    width: 180px;
    margin-top: 10px;
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  background-color: #fff;
  font-size: 15px;
  border: none;
  text-align: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const AddButton = styled.button`
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

export const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
`;
