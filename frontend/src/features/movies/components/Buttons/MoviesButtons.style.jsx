import styled from 'styled-components';

export const MoviesButtonsContainer = styled.div`
  width: 100%;
  /* margin-bottom: 5rem;
  margin-top: 3rem; */
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MoviesBtn = styled.div`
  text-transform: capitalize;
  padding: 0.5rem 1.5rem;
  font-size: 1.5rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  text-align: center;
  border: 1px solid var(--primary-color);
  margin: 0px 1.5rem;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  color: var(--text-white);
  &.active {
    background: var(--primary-color);
    color: var(--text-dark);
    border: 1px solid var(--secondary-color);  
  }
  &:hover {
    background: var(--primary-color);
    color: var(--text-dark);
  }
  @media (max-width: 768px) {
    width: 20rem;
    margin: 2rem auto;
  }
  
`;

