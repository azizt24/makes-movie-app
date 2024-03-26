import styled from 'styled-components';
export const PageContainer = styled.div`
  padding: 0vw 10vw;
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
  margin-top:6.8rem;

  @media only screen and (max-width: 500px) {
    overflow: hidden;
    margin-top: 6.8rem;
  }
`;

export const OverlayContainer = styled.div`
  position: relative;
  transform: skewY(2.5deg) translateY(-30px);
  color: var(--text-white);
  display: flex;
  justify-content: center;
  height:60vh;

  @media screen and (max-width: 500px) {
    height: 45vh;
  }

  &:after {
    margin-top: -0.4rem;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 1;
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


export const LineSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d7cdcd; /* Adjust the color as needed */
`;