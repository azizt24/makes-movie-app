import 'react';
import { SearchButton } from './Navbar.styles';
import { IoMdSearch } from 'react-icons/io';

const SearchButtonComponent = ({ handleSearch, isToggled }) => {
  return (
    <SearchButton onClick={handleSearch} isToggled={isToggled}>
      <IoMdSearch size="1.5em" />
      <b>Search</b>
    </SearchButton>
  );
};

export default SearchButtonComponent;
