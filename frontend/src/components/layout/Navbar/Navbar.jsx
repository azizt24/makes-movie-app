import { useNavigate, Link } from 'react-router-dom';
import noImagePlaceholder from '../../../../public/images/No-Image-Placeholder.svg.png';

import {
  NavbarContainer,
  LeftSide,
  RightSide,
  SearchResultContent,
  SearchInputWrapper,
  SearchResultsBox,
  SearchResultItem,
  SearchResultImage,
  SearchResultTitle,
  SearchResultSubText,
  SearchResultRating,
  MdLocalMoviesIcon,
  RxAvatarIcon,
  StarIcon,
  StyledLink,
} from './Navbar.styles';

import GoogleButtonComponent from './GoogleButtonComponent';
import MenuBoxComponent from './MenuBoxComponent';
import ToggleButtonComponent from './ToggleButtonComponent';
import SearchInputComponent from './SearchInputComponent';
import SearchButtonComponent from './SearchButtonComponent';
import SettingIconComponent from './SettingIconComponent';
import { useDebouncedSearch } from '../../../hooks/useDebouncedSearch';
import { useState, useEffect, useRef } from 'react';
import HamburgerIconComponnent from './HamburgerIconComponent';
import MenuBoxComponnent from './MenuBoxComponent';
import ToggleButtonComponnent from './ToggleButtonComponent';
import SettingIconComponnent from './SettingIconComponent';
import { setTheme } from '../../../redux/slices/ui.slice';
import { useDispatch } from 'react-redux';

const Navbar = ({ isToggled, setIsToggled }) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 300);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const navigate = useNavigate();

  const handleResults = results => {
    setSearchResults(results);
  };

  const { query, setQuery } = useDebouncedSearch('', handleResults);
  const navbarRef = useRef();

  const dispatch = useDispatch();

  const handleThemeChange = newTheme => {
    dispatch(setTheme(newTheme));
  };

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 300);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = () =>
    navigate(`/movies/search/${encodeURIComponent(query)}/page/1`);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    if (isToggled === false) dispatch(setTheme('Dark-Theme'));
    else if (isToggled === true) dispatch(setTheme('Default-Theme'));
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <NavbarContainer ref={navbarRef} isToggled={isToggled}>
        <LeftSide>
          <HamburgerIconComponnent
            onClick={handleMenuToggle}
            isOpen={isMenuOpen}
            isToggled={isToggled}
          />
          <MenuBoxComponnent
            isToggled={isToggled}
            onToggle={handleToggle} // Consider renaming to reflect the action
            onMenuToggle={toggleMenu}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </LeftSide>
        <RightSide>
          {/* <GoogleButtonComponnent /> */}
          {!isMobileView && <SettingIconComponnent isToggled={isToggled} />}
          {!isMobileView && (
            <ToggleButtonComponnent
              onClick={handleToggle}
              isToggled={isToggled}
            />
          )}
          {!isMobileView && (
            <SearchInputWrapper>
              <SearchInputComponent
                isToggled={isToggled}
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              <SearchButtonComponent
                handleSearch={handleSearch}
                isToggled={isToggled}
              />
            </SearchInputWrapper>
          )}
        </RightSide>
      </NavbarContainer>
      {!isMobileView && searchResults && (
        <SearchResultsBox>
          {searchResults.actorsAndDirectors?.map(person => (
            <SearchResultItem key={person.id}>
              <StyledLink
                to={`/movies/actors/${encodeURIComponent(person.name)}/page/1`}
              >
                <SearchResultImage
                  src={person.profileImg || noImagePlaceholder}
                  alt={person.name}
                />
                <SearchResultContent>
                  <SearchResultTitle>{person.name}</SearchResultTitle>
                  <SearchResultSubText>
                    <RxAvatarIcon /> Actor
                  </SearchResultSubText>
                </SearchResultContent>
              </StyledLink>
            </SearchResultItem>
          ))}
          {searchResults.movies?.map(movie => (
            <SearchResultItem key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`}>
                <SearchResultImage
                  src={movie.posterImg || noImagePlaceholder}
                  alt={movie.title}
                />
                <SearchResultContent>
                  <SearchResultTitle>{movie.title}</SearchResultTitle>
                  <SearchResultSubText>
                    <MdLocalMoviesIcon /> {movie.releaseYear}
                  </SearchResultSubText>
                  <SearchResultRating>
                    <StarIcon /> {movie.rating}
                  </SearchResultRating>
                </SearchResultContent>
              </StyledLink>
            </SearchResultItem>
          ))}
        </SearchResultsBox>
      )}
    </>
  );
};

export default Navbar;
