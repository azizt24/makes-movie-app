import styled from 'styled-components';
export const PageContainer = styled.div`
  padding: 0vw 15vw;
  overflow: hidden;
  background: linear-gradient(to right, #141e30, #456181);
  @media screen and (max-width: 1200px) {
    padding: 0 10vw;
  }
  @media screen and (max-width: 1000px) {
    padding: 0;
  }
`;

export const MovieContainer = styled.div`
  position: relative;
  background-color: #79d3f3;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 500px) {
    overflow: hidden;
  }
`;

export const OverlayContainer = styled.div`
  height: 60vh;
  position: relative;
  transform: skewY(2.5deg) translateY(-30px);
  color: var(--text-white);
  display: flex;
  justify-content: center;

  @media screen and (max-width: 500px) {
    height: 45vh;
  }

  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;

    background: ${props =>
      props.poster
        ? `url(https://image.tmdb.org/t/p/w1280/${props.poster})`
        : null};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const DetailContainer = styled.div`
  /* transform: skewY(-2.5deg); */
`;
