import {
  OptionContainer,
  OptionHeader,
  SubOptionsContainer,
} from './SettingsOption.styles';

const SettingsOption = ({ label, isOpen, onClick, children }) => {
  return (
    <OptionContainer>
      <OptionHeader onClick={onClick}>{label}</OptionHeader>
      {isOpen && (
        <SubOptionsContainer isOpen={isOpen}>{children}</SubOptionsContainer>
      )}
    </OptionContainer>
  );
};

export default SettingsOption;
