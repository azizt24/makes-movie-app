import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const OptionContainer = styled.div`
  margin-bottom: 10px;
  padding-top: 10px;
`;

export const OptionHeader = styled.div`
  cursor: pointer;
`;

export const SubOptionsContainer = styled.div`
  margin-left: 15px;
  padding: 10px;
  opacity: ${props => (props.isOpen ? '1' : '0')};
  transition: opacity 0.9s ease;
  animation: ${props => props.isOpen && fadeIn} 0.9s ease;
`;
