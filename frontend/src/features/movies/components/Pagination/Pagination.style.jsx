import styled from 'styled-components';
import '../../../../styles/global.css';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border: 1px solid black;
  color: var(--text-white);
  width: 100vw;
  background: red;
`;

export const NumberContainer = styled.div`
  align-items: center;
  width: 20vw;
  background: blue;

  @media (max-width: 1000px) {
    width: 80%;
  }
`;
export const PaginationButton = styled.button`
  padding: 5px 10px;
  color: var(--text-white);
  border: none;
  cursor: pointer;
  border-right: 1px solid black;
  border-left: 1px solid black;
  width: 20vw;
  background: balck;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 576px) {
    width: 10%;
    font-size: 10px;
    margin-right: auto;
  }
`;

export const NumberButton = styled.button`
  padding: 5px 10px;
  color: var(--text-white);
  border: none;
  cursor: pointer;
  border-right: 1px solid black;
  border-left: 1px solid black;
  width: 11.1%;

  &:hover {
    background-color: #505357;
  }
`;
