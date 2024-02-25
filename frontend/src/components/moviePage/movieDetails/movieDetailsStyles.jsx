import styled from 'styled-components';

export const OverlayContainer = styled.div`
  position: absolute;
  width: 42%;
  height: 35%;
  top: 0;
  margin-top: 0;
  padding-top: 2%;
  color: #69bada;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  margin-left: 13%;
`;

export const LogoImage = styled.img`
  width: 20px;
  height: 20px;
  vertical-align: middle;
`;

export const RatingRow = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RatingPair = styled.div`
  padding-top: 2%;
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  box-shadow: 0 2px 8px rgba(153, 144, 144, 0.8);
  background-color: rgba(50, 50, 50, 0.8);
  border-radius: 8px;
`;

export const RatingText = styled.span`
  margin-top: 5px;
  font-size: 12px;
`;
