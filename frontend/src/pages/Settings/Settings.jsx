import { useDispatch } from 'react-redux';
import { setTheme, setSpinner } from '../../redux/slices/ui.slice';
import { Container, Header, OptionsContainer } from './Settings.styles';
import { useState } from 'react';
import SettingsOption from './SettingsOption';
import Overlay from './Overlay';
import { TitleContainer } from '../../components/layout/Title/Title.style';
import SlidingAnimation from '../../components/ui/animation/SlidingAnimation';

const Settings = () => {
  const dispatch = useDispatch();

  const handleThemeChange = newTheme => {
    dispatch(setTheme(newTheme));
  };

  const handleSpinnerChange = newSpinner => {
    dispatch(setSpinner(newSpinner));
  };

  const [showOverlay, setShowOverlay] = useState({
    status: false,
    content: null,
  });
  const [isSpinnerOpen, setIsSpinnerOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  const toggleSpinner = () => {
    setIsSpinnerOpen(!isSpinnerOpen);
    if (isThemeOpen) setIsThemeOpen(false);
  };

  const toggleTheme = () => {
    setIsThemeOpen(!isThemeOpen);
    if (isSpinnerOpen) setIsSpinnerOpen(false);
  };

  const handleCloseOverlay = () => {
    setShowOverlay({ status: false, content: null });
  };

  const handleOpenOverlay = content => {
    setShowOverlay({ status: true, content: content });
  };

  const handleSave = () => {
    if (
      showOverlay.content === 'Dark-Theme' ||
      showOverlay.content === 'Default-Theme'
    ) {
      handleThemeChange(showOverlay.content);
    } else if (
      showOverlay.content === 'Spin' ||
      showOverlay.content === 'Camera'
    ) {
      handleSpinnerChange(showOverlay.content);
    }
    handleCloseOverlay();
  };

  const handleCancel = () => {
    handleCloseOverlay();
  };

  return (
    <Container>
      <Header>
        <TitleContainer>Customize your experience</TitleContainer>
      </Header>
      <OptionsContainer>
        <SettingsOption
          label="Spinners"
          isOpen={isSpinnerOpen}
          onClick={toggleSpinner}
        >
          <SlidingAnimation
            option1="Spin"
            handleOpen={handleOpenOverlay}
            option2="Camera"
          />
        </SettingsOption>
        <SettingsOption
          label="Themes"
          isOpen={isThemeOpen}
          onClick={toggleTheme}
        >
          <SlidingAnimation
            option1="Default-Theme"
            handleOpen={handleOpenOverlay}
            option2="Dark-Theme"
          />
        </SettingsOption>
      </OptionsContainer>
      {showOverlay.status && (
        <Overlay
          onClose={handleCloseOverlay}
          onSave={handleSave}
          onCancel={handleCancel}
          content={showOverlay.content}
        />
      )}
    </Container>
  );
};

export default Settings;
