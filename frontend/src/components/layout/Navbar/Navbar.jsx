import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
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

import HamburgerIconComponent from './HamburgerIconComponent';
import MenuBoxComponent from './MenuBoxComponent';
import ToggleButtonComponent from './ToggleButtonComponent';
import SearchInputComponent from './SearchInputComponent';
import SearchButtonComponent from './SearchButtonComponent';
import SettingIconComponent from './SettingIconComponent';
import { useDebouncedSearch } from '../../../hooks/useDebouncedSearch';
import MenuBoxComponnent from './MenuBoxComponent';
import { setTheme } from '../../../redux/slices/ui.slice';
import { useDispatch } from 'react-redux';

const Navbar = ({ isToggled, setIsToggled }) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 300);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const navigate = useNavigate();
  const handleResults = useCallback(results => {
    setSearchResults(results);
    setIsSearchResultsVisible(true); // Show the search results box
  }, []);
  const { query, setQuery } = useDebouncedSearch('', handleResults);

  const navbarRef = useRef();
  const searchResultsRef = useRef(null);
  const dispatch = useDispatch();

  const handleResize = () => setIsMobileView(window.innerWidth <= 300);
  const [isSearchResultsVisible, setIsSearchResultsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = () =>
    navigate(`/movies/search/${encodeURIComponent(query)}/page/1`);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    const newTheme = isToggled ? 'Default-Theme' : 'Dark-Theme';
    dispatch(setTheme(newTheme));
  };

  const handleSearchFocus = () => {
    if (
      searchResults &&
      (searchResults.actorsAndDirectors.length > 0 ||
        searchResults.movies.length > 0)
    ) {
      setIsSearchResultsVisible(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target)
      ) {
        setIsSearchResultsVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = event => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <NavbarContainer ref={navbarRef} isToggled={isToggled}>
        <LeftSide>
          <HamburgerIconComponent
            onClick={handleMenuToggle}
            isOpen={isMenuOpen}
            isToggled={isToggled}
          />

          <MenuBoxComponnent
            isToggled={isToggled}
            onToggle={handleToggle}
            onMenuToggle={toggleMenu}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </LeftSide>
        <RightSide>
          {!isMobileView && <SettingIconComponent isToggled={isToggled} />}
          {!isMobileView && (
            <ToggleButtonComponent
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
                onFocus={handleSearchFocus}
              />
              <SearchButtonComponent
                handleSearch={handleSearch}
                isToggled={isToggled}
              />
            </SearchInputWrapper>
          )}
        </RightSide>
      </NavbarContainer>
      {!isMobileView && isSearchResultsVisible && searchResults && (
        <SearchResultsBox ref={searchResultsRef}>
          {/* {searchResults.actorsAndDirectors?.map(person => (
            <SearchResultItem key={person.id}>
              <StyledLink to={`/movies/actors/${encodeURIComponent(person.name)}/page/1`}>
                <SearchResultImage src={person.profileImg || noImagePlaceholder} alt={person.name} />
                <SearchResultContent>
                  <SearchResultTitle>{person.name}</SearchResultTitle>
                  <SearchResultSubText>
                    <RxAvatarIcon /> Actor
                  </SearchResultSubText>
                </SearchResultContent>
              </StyledLink>
            </SearchResultItem>
          ))} */}
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
