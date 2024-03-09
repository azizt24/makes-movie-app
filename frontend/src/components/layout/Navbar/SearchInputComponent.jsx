import  'react';
import { SearchInput } from './Navbar.styles';

const SearchInputComponent = ({ isToggled, value, onChange }) => {
  return (
    <SearchInput
      type="text"
      placeholder="Search..."
      isToggled={isToggled}
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInputComponent;
