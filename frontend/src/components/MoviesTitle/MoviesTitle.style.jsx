import styled from 'styled-components';

export const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 14.4px;
  padding-bottom: 14.4px;
  letter-spacing: 5px;
`;

export const FirstTitleLetter = styled.span`
  font-size: 35px;
  color: rgb(130, 216, 216);
  text-transform: capitalize;
  position: relative;
  width: 27px;

  &::before {
    content: '';
    position: absolute;
    bottom: 4px;
    left: -3px;
    height: 2px;
    width: 100%;
    background: rgb(130, 216, 216);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 1px;
    height: 2px;
    width: 70%;
    background: var(--text-white);
  }
`;

export const RestOfTitle = styled.span`
  font-size: 23px;
  color: rgb(255, 255, 255);
`;
