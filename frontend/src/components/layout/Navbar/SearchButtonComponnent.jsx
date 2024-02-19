import SearchSvg from '../../../assets/SearchSvg.png';
import {SearchButton} from './Navbar.styles';

const SearchButtonComponnent = ({ handleSearch , isToggled  }) => {
  return (
    <SearchButton onClick={handleSearch} isToggled={isToggled}>
      <img src={SearchSvg} alt="searchsvg" />
      <b>Search</b>
    </SearchButton>
  );
};
export default SearchButtonComponnent;
