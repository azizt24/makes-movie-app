import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SettingsOption = ({ label, isOpen, onClick, children }) => {
  return (
    <OptionContainer>
      <OptionHeader onClick={onClick}>{label}</OptionHeader>
      {isOpen && <SubOptionsContainer isOpen={isOpen}>{children}</SubOptionsContainer>}
    </OptionContainer>
  );
};

const OptionContainer = styled.div`
  margin-bottom: 10px;
  padding-top: 10px; 
`;

const OptionHeader = styled.div`
  cursor: pointer;
`;

const SubOptionsContainer = styled.div`
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transition: opacity 0.9s ease;
  animation: ${(props) => props.isOpen && fadeIn} 0.9s ease;
`;

export default SettingsOption;
