
import { useState, useEffect } from 'react';
import { NavbarContainer, LeftSide, RightSide } from './Navbar.styles';

import HamburgerIconComponnent from './HamburgerIconComponnent';
import GoogleButtonComponnent from './GoogleButtonComponnent';
import MenuBoxComponnent from './MenuBoxComponnent';
import ToggleButtonComponnent from './ToggleButtonComponnent';
import SearchInputComponnent from './SearchInputComponnent';
import SearchButtonComponnent from './SearchButtonComponnent';
import SettingIconComponnent from './SettingIconComponnent';
import { setTheme } from '../../../redux/slices/ui.slice';
import { useDispatch } from 'react-redux';


const Navbar = ({ isToggled, setIsToggled }) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();

  const handleThemeChange = (newTheme) => {
  dispatch(setTheme(newTheme));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggle = () => {

    setIsToggled(!isToggled);
    if(isToggled === false)
      dispatch(setTheme('dark'));
    else if(isToggled === true)
    dispatch(setTheme('default'));
    };

  const handleSearch = () => {};

  return (
    <>
      <NavbarContainer isToggled={isToggled}>
        <LeftSide>
          <HamburgerIconComponnent
            onClick={handleMenuToggle}
            isOpen={isMenuOpen}
            isToggled={isToggled}
          />
          <MenuBoxComponnent
            isToggled={isToggled}
            onClick={handleToggle}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </LeftSide>
        <RightSide>
          <GoogleButtonComponnent />
          {!isMobileView && <SettingIconComponnent isToggled={isToggled} />}
          {!isMobileView && (
            <ToggleButtonComponnent
              onClick={handleToggle}
              isToggled={isToggled}
            />
          )}
          {!isMobileView && <SearchInputComponnent isToggled={isToggled} />}
          {!isMobileView && (
            <SearchButtonComponnent
              onClick={handleSearch}
              isToggled={isToggled}
            />
          )}
        </RightSide>
      </NavbarContainer>
    </>
  );
};

export default Navbar;


