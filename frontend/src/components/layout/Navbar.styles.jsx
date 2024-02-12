import styled from 'styled-components';
import '../../styles/global.css';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--secondary-color-light);
  color: #fff;
  height: 70px; /* Set a fixed height for the NavbarContainer */
`;

export const LeftSide = styled.div``;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border: 3px solid;
  border-color: var(--primary-color);
  margin-right: 1rem;
  height: 40px;
  width: 180px; /* Set a fixed height for the SearchInput */
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ToggleButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: var(--primary-color);
  border: 2px solid;
  border-radius: 18px;
  height: 37px; /* Set a fixed height for the ToggleButton */
  width: 75px; /* Set a fixed width for the ToggleButton */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

// hamburger

export const HamburgerIcon = styled.div`
  width: 50px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  background-color: var(--secondary-color-light);
  align-items: center; /* Center the HamburgerIcon content */

  span {
    width: 100%;
    height: 3px;
    background-color: var(--primary-color);
    transition: all 0.3s ease;
  }

  /* Animation styles for the hamburger icon */
  &.open span:nth-child(1) {
    transform: translateY(8px) rotate(135deg);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: translateY(-8px) rotate(-135deg);
  }
`;

// Add content to HamburgerIcon
export const HamburgerLines = styled.span`
  width: 100%;
  height: 3px;
  background-color: var(--primary-color);
  transition: all 0.3s ease;
`;

// Search button

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: #111010;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  transition: background-color 0.3s ease;
  height: 40px; /* Set a fixed height for the SearchButton */
  img {
    width: 20px; /* Set the width of the image */
    height: 20px; /* Set the height of the image */
    margin-right: 5px; /* Add some right margin for spacing */
  }
  &:hover {
    background-color: #eae6e6;
  }
`;

export const GoogleButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  color: #878787;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 40px; /* Set a fixed height for the GoogleButton */
  width: 260px;

  &:hover {
    background-color: #eae6e6;
  }
`;

//setting button

export const SettingIcon = styled.img`
  width: 70px; /* Set the width of the image */
  height: 55px; /* Set the height of the image */
  margin-right: 1rem; /* Add some right margin for spacing */
`;
