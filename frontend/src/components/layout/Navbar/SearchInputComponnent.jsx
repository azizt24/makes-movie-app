import { SearchInput } from './Navbar.styles';
const SearchInputComponnent = ({ isToggled }) => {
  return <SearchInput type="text" placeholder="Search..." isToggled={isToggled}/>;
};
export default SearchInputComponnent;
