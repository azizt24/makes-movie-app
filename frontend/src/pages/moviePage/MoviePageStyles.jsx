import styled from 'styled-components';
export const PageContainer = styled.div`
  padding: 0vw 14vw;
  overflow: hidden;
  background-color:var(--secondary-color);
  /* background: linear-gradient(to right, #141e30, #456181); */
  @media screen and (max-width: 1200px) {
    padding: 0 10vw;
  }
  @media screen and (max-width: 1000px) {
    padding: 0;
  }
`;

export const MovieContainer = styled.div`
  padding-top:4vw;
  background-color:var(--secondary-color);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 500px) {
    overflow: hidden;
  }
`;

export const OverlayContainer = styled.div`
  height: 50vh;
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
    background-size: 100% 100%;
    background-repeat:cover;
    background-position: center;
  }
`;

export const DetailContainer = styled.div`
  /* transform: skewY(-2.5deg); */
`;
