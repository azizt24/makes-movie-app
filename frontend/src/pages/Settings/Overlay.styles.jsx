import styled from 'styled-components';

export const OverlayWrapper = styled.div`
  position: fixed;
  top: 10px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

export const OverlayContent = styled.div`
  background-color: var(--transparent-primary);
  padding: 20px;
  border-radius: 8px;
  width: 1100px;
  height: 370px;
  margin-top: -60px;
  color: white;
  font-size: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -25px;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;
  color: red;
`;
export const Title = styled.div`
  ${'' /* margin-bottom: 80px; */}
  position: absolute;
  top: -40px;
`;

export const ButtonGroup = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  margin-left: 10px;
  border: none;
  background-color: var(--primary-color);
  color: var(--text-dark);
  font-weight: bold;
  padding: 7px 7px;
  width: 75px;
  border-radius: 2px;
  cursor: pointer;
  margin-left: 20px;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  &:hover {
    background-color: var(--primary-color-light);
    transform: translateY(-3px);
  }
`;

export const ThemeTitle = styled.h1`
  font-size: 25px;
  color: var(--text-white);
  display: 11block;
  margin-top: 10px;
`;

export const TheContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PrimaryD = styled.div`
  width: 120px;
  height: 80px;
  background-color: #82d8d8;
  margin-left: 20px;
`;
export const SecondaryD = styled.div`
  width: 120px;
  height: 80px;
  background-color: #524763;
  margin-left: 40px;
`;
export const PrimaryT = styled.div`
  width: 120px;
  height: 80px;
  background-color: #f638dc;
  margin-left: 20px;
`;
export const SecondaryT = styled.div`
  width: 120px;
  height: 80px;
  background-color: #200f21;
  margin-left: 40px;
`;

export const OptionTheme = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-top: 10px;
`;

export const ColorHead = styled.div`
  font-size: 18px;
  margin-left: 25px;
  padding-bottom: 10px;
  padding-top: 10px;
`;
export const ThemeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
