import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import noImagePlaceholder from '../../../../public/images/No-Image-Placeholder.svg.png';

import {NavbarContainer,LeftSide,RightSide,SearchResultContent,SearchInputWrapper,SearchResultsBox,SearchResultItem,SearchResultImage,SearchResultTitle,SearchResultSubText,SearchResultRating,MdLocalMoviesIcon,RxAvatarIcon,StarIcon} from './Navbar.styles';

import HamburgerIconComponent from './HamburgerIconComponent';
import GoogleButtonComponent from './GoogleButtonComponent';
import MenuBoxComponent from './MenuBoxComponent';
import ToggleButtonComponent from './ToggleButtonComponent';
import SearchInputComponent from './SearchInputComponent';
import SearchButtonComponent from './SearchButtonComponent';
import SettingIconComponent from './SettingIconComponent';
import { useDebouncedSearch } from '../../../hooks/useDebouncedSearch';

const Navbar = ({ isToggled, setIsToggled }) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 300);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(null);  
  const navigate = useNavigate();

  const handleResults = (results) => {
    setSearchResults(results);  
  };

  const { query, setQuery } = useDebouncedSearch('', handleResults);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 300);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleToggle = () => setIsToggled(!isToggled);

  const handleSearch = () => navigate(`/movies/search/${encodeURIComponent(query)}/page/1`);

  return (
     <>
  <NavbarContainer isToggled={isToggled}>
    <LeftSide>
       <HamburgerIconComponent onClick={handleMenuToggle} isOpen={isMenuOpen} isToggled={isToggled} />
      <MenuBoxComponent isToggled={isToggled} onClick={handleToggle} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
</LeftSide>

  <RightSide>

     <GoogleButtonComponent />
    {!isMobileView && <SettingIconComponent isToggled={isToggled} />}
   {!isMobileView && <ToggleButtonComponent onClick={handleToggle} isToggled={isToggled} />}
     {!isMobileView && (

        <SearchInputWrapper>

           <SearchInputComponent
            isToggled={isToggled}
           value={query}
          onChange={(e) => setQuery(e.target.value)}
              />
          <SearchButtonComponent handleSearch={handleSearch} isToggled={isToggled} />
        </SearchInputWrapper>
          )}

        </RightSide>

      </NavbarContainer>
      {!isMobileView && searchResults && (
        <SearchResultsBox>
        {searchResults.actorsAndDirectors?.map((person) => (
          <SearchResultItem key={person.id}>
            <Link to={`/movies/actors/${encodeURIComponent(person.name)}/page/1`}>
              <SearchResultImage src={person.profileImg || noImagePlaceholder} alt={person.name} />
              <SearchResultContent>
                <SearchResultTitle>{person.name}</SearchResultTitle>
                <SearchResultSubText>
                  <RxAvatarIcon /> Actor
                </SearchResultSubText>
              </SearchResultContent>
            </Link>
          </SearchResultItem>
        ))}
        {searchResults.movies?.map((movie) => (
          <SearchResultItem key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <SearchResultImage src={movie.posterImg || noImagePlaceholder} alt={movie.title} />
              <SearchResultContent>
                <SearchResultTitle>{movie.title}</SearchResultTitle>
                <SearchResultSubText>
                  <MdLocalMoviesIcon /> {movie.releaseYear}
                </SearchResultSubText>
                <SearchResultRating>
                  <StarIcon /> {movie.rating}
                </SearchResultRating>
              </SearchResultContent>
            </Link>
          </SearchResultItem>
        ))}
      </SearchResultsBox>)}
    </>
  );};

export default Navbar;
