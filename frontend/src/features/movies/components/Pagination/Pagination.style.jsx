import styled from 'styled-components';
import '../../../../styles/global.css';
 


export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border: 1px solid #ffffff;
  color: var(--text-white);
  width: 100%;
  background-color: var(--secondary-color-light);
`;

export const NumberContainer = styled.div`
  align-items: center;
  width: 20vw;

  @media (max-width: 1000px) {
    width: 80%;
  }
`;
export const PaginationButton = styled.button`
  padding: 5px 10px;
  color: var(--text-white);
  border: none;
  cursor: pointer;
  border-right: 1px solid #ffffff;
  border-left: 1px solid #ffffff;
  width: 20%;
  background-color: var(--secondary-color-light);

  @media (max-width: 576px) {
    width: 10%;
    font-size: 10px;
    margin-right: auto;
  }
`;

 

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 60px;
  width: 100%;
  margin-top: 30px;
  padding: 10px;
  margin-left: 30px;
`;

export const NumberButton = styled.button`
  padding: 5px 10px;
  color: var(--text-white);
  border: none;
  cursor: pointer;
  border-right: 1px solid #ffffff;
  border-left: 1px solid #ffffff;
  width: 11.1%;
  background-color: var(--secondary-color-light);
  
  ${({ isCurrentPage }) =>
    isCurrentPage &&
    `
    background-color: #ccc;  
    box-shadow: 0 0 5px var(--secondary-color-lightest);  
    cursor: default;  
  `}
`;
