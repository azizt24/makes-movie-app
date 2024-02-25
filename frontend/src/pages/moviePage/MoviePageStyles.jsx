import styled from 'styled-components';
export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(to right, #141e30, #456181);
  overflow: visible;
`;

export const MovieContainer = styled.div`
  background-color: #79d3f3;
  width: 70%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-height: 100vh;
  overflow: visible;
`;

export const MovieImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  margin: 0;
  transform: skewY(5deg);
  transform-origin: top right;
`;
