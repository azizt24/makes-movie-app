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
} from './NavbarStyles';

import Setting from '../../assets/Setting.png';
import ToggleOff from '../../assets/ToggleOff1.png';
import ToggleOn from '../../assets/ToggleIn1.png';

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const handleSearch = () => {
    // Handle search functionality
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
          Sign in as Pinchas <br></br> pinchas.hodadad@gmail.com
        </GoogleButton>
        <img src={Setting} alt="Settings" />
        <ToggleButton onClick={handleToggle}>
          <img src={isToggled ? ToggleOn : ToggleOff} alt="Toggle" />
        </ToggleButton>
        <SearchInput type="text" placeholder="Search..." />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </RightSide>
    </NavbarContainer>
  );
};

export default Navbar;
