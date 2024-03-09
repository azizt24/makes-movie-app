import { HamburgerLines, HamburgerIcon } from './Navbar.styles';

const HamburgerIconComponnent = ({ onClick, isOpen, isToggled }) => {
  return (
    <HamburgerIcon onClick={onClick} isOpen={isOpen} isToggled={isToggled}>
      <HamburgerLines />
      <HamburgerLines />
      <HamburgerLines />
    </HamburgerIcon>
  );
};
export default HamburgerIconComponnent;
