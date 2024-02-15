import { useState } from 'react';
import {
  NavbarContainer,
  LeftSide,
  SearchInput,
  RightSide,
  ToggleButton,
  HamburgerLines,
  HamburgerIcon,
  SearchButton,
  GoogleButton,
  SettingIcon,
  MenuBox,
} from './Navbar.styles';

import Setting from '../../../assets/Setting2.svg';
import ToggleOff from '../../../assets/ToggleOff1.png';
import ToggleOn from '../../../assets/ToggleIn1.png';
import SearchSvg from '../../../assets/SearchSvg.png';

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const handleSearch = () => {};

  return (
    <NavbarContainer>
      <LeftSide>
        <HamburgerIcon onClick={handleMenuToggle} isOpen={isMenuOpen}>
          <HamburgerLines></HamburgerLines>
          <HamburgerLines></HamburgerLines>
          <HamburgerLines></HamburgerLines>
        </HamburgerIcon>
        {isMenuOpen && ( // CR - don't leave comments in the code - Conditionally render the MenuBox
          <MenuBox>
            <ul>
              <li>Home</li>
              <li>Ai Generated Movies</li>
              <li>Movies</li>
              <li>Advanced Search</li>
              <li>Popular Actors</li>
            </ul>
          </MenuBox>
        )}
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
