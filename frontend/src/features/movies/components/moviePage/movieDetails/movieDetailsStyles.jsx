import styled from 'styled-components';

export const DetailContainer = styled.div`
  transform: skewY(-2.5deg);
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  height: fit-content;
  margin-top: 2.5em;
  border-radius: 8px;
  padding: 2rem 4rem;
  color: var(--primary-color);
  @media screen and (max-width: 500px) {
    padding: 2rem 4rem;
    width: 100vw;
  }
`;
export const MovieTitle = styled.div`
  font-weight: 700;
  font-size: 2.5rem;
  @media screen and (max-width: 500px) {
    font-size: 1.7rem;
  }
`;
export const SubTitle = styled.div`
  font-size: 1.7rem;
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;
export const LogoImage = styled.img`
  width: 3rem;
  height: 2rem;
  vertical-align: middle;
  margin-top: 1rem;
`;

export const RatingRow = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RatingPair = styled.div`
  padding-top: 2%;
  width: 8rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: 1rem;
  box-shadow: 0 2px 8px rgba(153, 144, 144, 0.8);
  background-color: rgba(50, 50, 50, 0.8);
  border-radius: 8px;
`;

export const RatingText = styled.span`
  margin-top: 1rem;
  font-size: 1.5rem;
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;
