import { MenuBox } from './Navbar.styles';
import SettingIconComponnent from './SettingIconComponnent';
import ToggleButtonComponnent from './ToggleButtonComponnent';
import SearchButtonComponnent from './SearchButtonComponnent';
import SearchInputComponnent from './SearchInputComponnent';

import { FlexContainerAbove } from './Navbar.styles';
import { FlexContainerBelow } from './Navbar.styles';
import { MobileFlex } from './Navbar.styles';
import { MobileList } from './Navbar.styles';

const MenuBoxComponnent = ({ isToggled, onClick, isMenuOpen }) => {
  const isMobileView = window.innerWidth <= 768;

  return (
    <>
      {isMobileView ? (
        <>
          <MenuBox
            isToggled={isToggled}
            isMenuOpen={isMenuOpen}
            className="menu-box"
          >
            <MobileFlex>
              <FlexContainerAbove>
                <ToggleButtonComponnent
                  isToggled={isToggled}
                  onClick={onClick}
                />
                <SettingIconComponnent isToggled={isToggled} />
              </FlexContainerAbove>
              <FlexContainerBelow>
                <SearchInputComponnent isToggled={isToggled} />
                <SearchButtonComponnent isToggled={isToggled} />
              </FlexContainerBelow>
            </MobileFlex>
            <MobileList>
              <ul>
                <li>Home</li>
                <li>Ai Generated Movies</li>
                <li>Movies</li>
                <li>Advanced Search</li>
                <li>Popular Actors</li>
              </ul>
            </MobileList>
          </MenuBox>
        </>
      ) : (
        <MenuBox
          isToggled={isToggled}
          isMenuOpen={isMenuOpen}
          className="menu-box"
        >
          <ul>
            <li>Home</li>
            <li>Ai Generated Movies</li>
            <li>Movies</li>
            <li>Advanced Search</li>
            <li>Popular Actors</li>
          </ul>
        </MenuBox>
      )}
    </>
  );
};
export default MenuBoxComponnent;
