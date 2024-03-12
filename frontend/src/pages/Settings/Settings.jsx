import { useDispatch } from 'react-redux';
import { setTheme, setSpinner } from '../../redux/slices/ui.slice';
import {
  Container,
  Header,
  OptionsContainer,
  OptionButton,
} from './Settings.styles';
import { useState } from 'react';
import SettingsOption from './SettingsOption';
import Overlay from './Overlay';
import { TitleContainer } from '../../components/layout/Title/Title.style';

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
  const [option1Open, setOption1Open] = useState(false);
  const [option2Open, setOption2Open] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const toggleOption1 = () => {
    setOption1Open(!option1Open);
    if (option2Open) setOption2Open(false);
  };

  const toggleOption2 = () => {
    setOption2Open(!option2Open);
    if (option1Open) setOption1Open(false);
  };

  const handleCloseOverlay = () => {
    setShowOverlay({ status: false, content: null });
  };

  const handleOpenOverlay = content => {
    setShowOverlay({ status: true, content: content });
  };

  const handleSave = () => {
    if (showOverlay.content === 'dark' || showOverlay.content === 'default') {
      handleThemeChange(showOverlay.content);
    } else if (
      showOverlay.content === 'spin' ||
      showOverlay.content === 'camera'
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
          isOpen={option1Open}
          onClick={toggleOption1}
        >
          <OptionButton>
            <SettingsOption
              onClick={() => handleOpenOverlay('spin')}
              label="Spin"
            />
          </OptionButton>
          <OptionButton>
            <SettingsOption
              onClick={() => handleOpenOverlay('camera')}
              label="Camera"
            />
          </OptionButton>
        </SettingsOption>
        <SettingsOption
          label="Themes"
          isOpen={option2Open}
          onClick={toggleOption2}
        >
          <OptionButton>
            <SettingsOption
              onClick={() => handleOpenOverlay('default')}
              label="Default-Theme"
            />
          </OptionButton>
          <OptionButton>
            <SettingsOption
              onClick={() => handleOpenOverlay('dark')}
              label="Dark-Theme"
            />
          </OptionButton>
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
