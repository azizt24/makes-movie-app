import styled from 'styled-components';
import TmdbSvg from '../../../assets/tmdb.png';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* background-color: var(--secondary-color-light); */
  background-color: ${props =>
    props.isToggled
      ? 'var(--DarModeBodyColor)'
      : 'var(--secondary-color-light)'};
  color: #fff;
  padding: 20px;
  width: 100%;
  height: 32px;
  
 
`;

export const FooterContent = styled.div`
  display: flex;
  margin-right: 25px;
  margin-left: 10px;
  width: 180px;
  height: 17px;
  align-items: center;
  background-image: url(${TmdbSvg});
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    margin-right: 15px;
    margin-left: 5px;
    width: 180px;
  }
`;

export const PoweredBy = styled.span`
  margin-top: 10px;
  font-size: 10px;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 8px;
    margin-top: 4px;
    margin-right: 2px;
  }
`;
