import { HamburgerLines, HamburgerIcon } from './Navbar.styles';

const HamburgerIconComponnent = ({ onClick, isOpen }) => {
  return (
    <HamburgerIcon onClick={onClick} isOpen={isOpen}>
      <HamburgerLines></HamburgerLines>
      <HamburgerLines></HamburgerLines>
      <HamburgerLines></HamburgerLines>
    </HamburgerIcon>
  );
};
export default HamburgerIconComponnent;
