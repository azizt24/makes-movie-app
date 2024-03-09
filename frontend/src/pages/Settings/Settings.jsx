import { useDispatch } from 'react-redux';
import { setTheme} from '../../redux/slices/ui.slice';
import { Container, Header, OptionsContainer } from './Settings.styles';
import React, { useState } from 'react';
import SettingsOption from './SettingsOption';

const Settings = () => {

    const dispatch = useDispatch();

    const handleThemeChange = (newTheme) => {
    dispatch(setTheme(newTheme));
 };

    const [option1Open, setOption1Open] = useState(false);
    const [option2Open, setOption2Open] = useState(false);
  
    const toggleOption1 = () => {
      setOption1Open(!option1Open);
      if (option2Open) setOption2Open(false);
    };
  
    const toggleOption2 = () => {
      setOption2Open(!option2Open);
      if (option1Open) setOption1Open(false);
    };
  
    return (
      <Container>
        <Header>Customize your experience</Header>
        <OptionsContainer>
          <SettingsOption
            label="Spinners"
            isOpen={option1Open}
            onClick={toggleOption1}
          >
            <SettingsOption label="Spin" />
            <SettingsOption label="Camera" />
          </SettingsOption>
          <SettingsOption
            label="themes"
            isOpen={option2Open}
            onClick={toggleOption2}
          >
            <SettingsOption label="Default-Theme" />
            <SettingsOption label="Dark-Theme" />
          </SettingsOption>
        </OptionsContainer>
      </Container>
    );
  };

export default Settings;
