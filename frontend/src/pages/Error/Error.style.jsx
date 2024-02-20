import styled from 'styled-components';

export const ErrorContainer = styled.main`
  display: flex;
  justify-content :center; 
  min-height: 100vh;
  padding: 2rem;
  margin-top: 10rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const NotFoundSection = styled.div`
  text-align: center;
  font-family: sans-serif; 

  .error-code {
    font-size: 9rem; 
    font-weight: bold;
    color: #625577 ; 
  }

  .error-message {
    font-size: 3rem;
    font-weight: bold;
    margin-top: 1rem;
    line-height: 1.75;
    padding: 2rem; 
  }

  .back-home-button {
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc; 
    border-radius: 4px;
    background-color: #eee;
    color: #333; 
    text-decoration: none;
    cursor: pointer;
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
