import styled from 'styled-components';
export const TagPlotContainer = styled.div`
  margin: 2rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  display: block;
  width: 70%;
  padding: 2rem;
  align-self: flex-start;
  font-size: var(--paragraph);
  color:var(--primary-color);
  text-align: left;

  @media screen and (max-width: 500px) {
    width: fit-content;
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 2.5rem;
  }
`;
export const TagLine = styled.div`
  font-size: 3rem;
  font-weight: 700;
  font-style: italic;
  @media screen and (max-width: 500px) {
    width: 70%;
    font-size: 1.8rem;
    padding-right: 17rem;
    padding-bottom: 2rem;
  }
`;
export const Plot = styled.p`
  width: 80%;
  margin-top: 2vw;
  align-self: flex-start;
  font-size: var(--paragraph);
  @media screen and (max-width: 500px) {
    font-size: 12px;
    width: auto;
  }
`;
