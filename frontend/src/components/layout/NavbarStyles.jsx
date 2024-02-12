import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #392f2f;
  color: #fff;
  height: 100px; /* Set a fixed height for the NavbarContainer */
`;

export const LeftSide = styled.div``;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  margin-right: 1rem;
  height: 23px; /* Set a fixed height for the SearchInput */
`;

export const RightSide = styled.div`
 display: flex;
  align-items: center;
  height: 100%; 
`;

/* border: none;
  cursor: pointer;
  background-color: #66e8d7;
  border-radius:70%;
  height: 20vh; */

export const ToggleButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: #66e8d7;
  border-radius: 45%; /* Make ToggleButton circular */
  height:37px; /* Set a fixed height for the ToggleButton */
  width: 70px; /* Set a fixed width for the ToggleButton */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
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
  background-color: #392f2f;
  align-items: center; /* Center the HamburgerIcon content */

  span {
    width: 100%;
    height: 3px;
    background-color: #66e8d7;
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
  background-color: #66e8d7;
  transition: all 0.3s ease;
`;


// Search button

export const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #66e8d7;
  color: #111010;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  transition: background-color 0.3s ease;
  height: 40px; /* Set a fixed height for the SearchButton */

  &:hover {
    background-color: #d8d1d1;
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

  &:hover {
    background-color: #d8d1d1;
  }
`;

