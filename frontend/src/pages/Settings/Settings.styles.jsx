import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 150px;
  background-color: var(--secondary-color);
  padding-bottom: 60px;
  color: white;
  height: 700px;
`;

export const Header = styled.h1`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family-main);
  font-size: 20px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 20px;
`;
export const OptionButton = styled.div`
  font-size: 15px;
  border: var(--primary-color) 3px solid;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  width: 140px;
`;
