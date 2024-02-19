import SearchSvg from '../../../assets/SearchSvg.png';
import {SearchButton} from './Navbar.styles';

const SearchButtonComponnent = ({ handleSearch }) => {
  return (
    <SearchButton onClick={handleSearch}>
      <img src={SearchSvg} alt="searchsvg" />
      <b>Search</b>
    </SearchButton>
  );
};
export default SearchButtonComponnent;
