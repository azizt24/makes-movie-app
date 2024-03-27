import styled from 'styled-components';

export const WidgetContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  width: 25rem;
  height: 25rem;
  top: 50%;
  left: 85%;

  z-index: 1;
  transition: transform 0.5s ease;
  transform-origin: top center;
  transform: translate(-50%, -50%);

  &:hover {
    transform: translate(-50%, -50%) rotate(10deg) scale(1.2);
  }
  @media screen and (max-width: 500px) {
    top: 400px;
    left: 76%;
  }
`;
export const Arrow = styled.div`
  margin-right: 4vw;

  width: 39%;
  height: 30%;
  font-size: 30px;
  color: #79d3f3;
  cursor: pointer;
  position: relative;
  transition: color 0.5s ease;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;

  &:hover {
    color: #042d49;
  }
  &:after {
    content: '▶';
    position: absolute;
    font-size: 4rem;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s;
  }
`;

export const arrowStyles = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(52% - 25px)',

  width: 30,
  height: 30,
  cursor: 'pointer',
  background: '#49BCEC',
  border: 'none',
  color: '#7AD3F3',
  borderRadius: '50%',
  fontSize: '30px',
  fontWeight: 'bold',
};

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

export const StyledCarouselDiv = styled.div`
  margin-top: 15%;
  margin-left: 10%;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TitleText = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 23px;
  font-weight: 400;
`;
export const UnderlinedText = styled.span`
  position: relative;
  display: inline-block;
  color: #82d8d8;
  font-size: 35px;

  &:before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    width: 100%;
    height: 4px;
    background: #82d8d8;
    margin: auto;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    right: 0;
    width: 50%;
    height: 2px;
    background: #f3f5f6;
    margin: auto;
  }
`;
export const CloseButton = styled.button`
  background-color: #82d8d8;
  color: #56526c;
  font-size: 24px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  top: -10px;
  right: -10px;
  z-index: 1000;
  overflow: visible;

  &:hover {
    background-color: #56526c;
    color: #82d8d8;
    transform: scale(1.2);
  }

  &:focus {
    outline: none;
  }
`;
