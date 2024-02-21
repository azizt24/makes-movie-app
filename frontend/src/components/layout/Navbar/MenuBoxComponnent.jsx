import { MenuBox } from './Navbar.styles';
import SettingIconComponnent from './SettingIconComponnent';
import ToggleButtonComponnent from './ToggleButtonComponnent';
import SearchButtonComponnent from './SearchButtonComponnent';
import SearchInputComponnent from './SearchInputComponnent';

import { FlexContainerAbove } from './Navbar.styles';
import { FlexContainerBelow } from './Navbar.styles';
import { MobileFlex } from './Navbar.styles';
import { MobileList } from './Navbar.styles';
import LinksList from './LinksList';

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Ai Generated Movies',
    path: '/ai-generated-movies',
  },
  {
    name: 'Movies',
    path: '/movies/latest/page/1',
  },
  {
    name: 'Advanced Search',
    path: '/advanced-search',
  },
  {
    name: 'Popular Actors',
    path: '/popular-actors/page/1',
  },
];

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
              <LinksList links={links} />
            </MobileList>
          </MenuBox>
        </>
      ) : (
        <MenuBox
          isToggled={isToggled}
          isMenuOpen={isMenuOpen}
          className="menu-box"
        >
          <LinksList links={links} />
        </MenuBox>
      )}
    </>
  );
};
export default MenuBoxComponnent;
