
import styled from 'styled-components';

export const ErrorContainer = styled.main`
  display: flex;
  justify-content :center; 
  height : auto; 
  padding: 2rem;
  margin-top: 5rem;
  margin-bottom: 5rem; 

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const NotFoundSection = styled.div`
  text-align: center;
  font-family: sans-serif; 

  .error-code {
    font-size: 7rem; 
    font-weight: bold;
    color: #625577 ; 
  }

  .error-message {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.75;
    color: #625577 ; 
    padding: 2rem; 
  }

  .back-home-button {
    padding: .7rem 1rem;
    border: 1px solid #ccc; 
    border-radius: 4px;
    background-color: #82d8d8;
    color: #565555; 
    text-decoration: none;
    cursor: pointer;
    font-size: 1.2rem;
  }
`;

export const GenericErrorSection = styled.main`
  display: flex;
  min-height: 100vh;
  place-items: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  .error-message {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
`;
