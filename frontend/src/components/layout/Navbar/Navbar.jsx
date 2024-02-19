import { useState } from 'react';
import { NavbarContainer, LeftSide, RightSide } from './Navbar.styles';

import HamburgerIconComponnent from './HamburgerIconComponnent';
import GoogleButtonComponnent from './GoogleButtonComponnent';
import MenuBoxComponnent from './MenuBoxComponnent';
import ToggleButtonComponnent from './ToggleButtonComponnent';
import SearchInputComponnent from './SearchInputComponnent';
import SearchButtonComponnent from './SearchButtonComponnent';
import SettingIconComponnent from './SettingIconComponnent';

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
        <HamburgerIconComponnent
          onClick={handleMenuToggle}
          isOpen={isMenuOpen}
        />
        {isMenuOpen && ( // Conditionally render the MenuBox
          <MenuBoxComponnent />
        )}
      </LeftSide>
      <RightSide>
        <GoogleButtonComponnent />
        <SettingIconComponnent />
        <ToggleButtonComponnent onClick={handleToggle} isToggled={isToggled} />
        <SearchInputComponnent />
        <SearchButtonComponnent onClick={handleSearch} />
      </RightSide>
    </NavbarContainer>
  );
};

export default Navbar;
