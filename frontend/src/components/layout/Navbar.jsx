import { useState } from 'react';

import {
  NavbarContainer,
  LeftSide,
  SearchInput,
  RightSide,
  ToggleButton,
  HamburgerIcon,
  HamburgerLines,
  SearchButton,
  GoogleButton,
  SettingIcon,
} from './Navbar.styles';

import Setting from '../../assets/Setting.png';
import ToggleOff from '../../assets/ToggleOff1.png';
import ToggleOn from '../../assets/ToggleIn1.png';
import SearchSvg from '../../assets/SearchSvg.png';


const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const handleSearch = () => {
    
  };

  return (
    <NavbarContainer>
      <LeftSide>
        <HamburgerIcon>
          <HamburgerLines></HamburgerLines>
          <HamburgerLines></HamburgerLines>
          <HamburgerLines></HamburgerLines>
        </HamburgerIcon>
      </LeftSide>
      <RightSide>
        <GoogleButton>
          <b>Sign in as movie466 </b>
          <br></br> movie466@gmail.com
        </GoogleButton>
        <SettingIcon src={Setting} alt="Settings" />
        <ToggleButton onClick={handleToggle}>
          <img src={isToggled ? ToggleOn : ToggleOff} alt="Toggle" />
        </ToggleButton>
        <SearchInput type="text" placeholder="Search..." />
        <SearchButton onClick={handleSearch}>
          <img src={SearchSvg} alt="searchsvg" />
          Search
        </SearchButton>
      </RightSide>
    </NavbarContainer>
  );
};

export default Navbar;
