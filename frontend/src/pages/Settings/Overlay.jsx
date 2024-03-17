import Spin from '../../components/Spinners/Spin/Spin';
import Film from '../../components/Spinners/Camera/Camera';
import {
  OverlayWrapper,
  OverlayContent,
  CloseButton,
  ButtonGroup,
  Button,
  Title,
  ThemeTitle,
  PrimaryD,
  SecondaryD,
  PrimaryT,
  SecondaryT,
  OptionTheme,
  TheContainer,
  ColorHead,
  ThemeContainer,
} from './Overlay.styles';
import { TitleContainer } from '../../components/layout/Title/Title.style';
import XIcon from '../../components/ui/animation/XIcon';

const Overlay = ({ onClose, onSave, onCancel, content }) => {
  return (
    <OverlayWrapper>
      <OverlayContent>
        <Title>
          <TitleContainer>What do you think?</TitleContainer>
        </Title>
        <CloseButton onClick={onClose}>
          <XIcon />
        </CloseButton>
        {content === 'Spin' && <Spin />}
        {content === 'Camera' && <Film />}
        {content === 'Default-Theme' && (
          <TheContainer>
            <ThemeTitle>Default Theme</ThemeTitle>
            <ThemeContainer>
              <OptionTheme>
                <ColorHead>primary color</ColorHead>
                <PrimaryD />
              </OptionTheme>
              <OptionTheme>
                <ColorHead>secondary color</ColorHead>
                <SecondaryD />
              </OptionTheme>
            </ThemeContainer>
          </TheContainer>
        )}
        {content === 'Dark-Theme' && (
          <TheContainer>
            <ThemeTitle>Dark Theme</ThemeTitle>
            <ThemeContainer>
              <OptionTheme>
                <ColorHead>primary color</ColorHead>
                <PrimaryT />
              </OptionTheme>
              <OptionTheme>
                <ColorHead>secondary color</ColorHead>
                <SecondaryT />
              </OptionTheme>
            </ThemeContainer>
          </TheContainer>
        )}

        <ButtonGroup>
          <Button onClick={onSave}>Save</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </ButtonGroup>
      </OverlayContent>
    </OverlayWrapper>
  );
};

export default Overlay;
