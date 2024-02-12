import styled from 'styled-components';
import '../../../styles/global.css';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--secondary-color-light);
  color: #fff;
  width: 1881;
  height: 67px; /* Set a fixed height for the NavbarContainer */
`;

export const LeftSide = styled.div`
  position: relative;
`;

export const MenuBox = styled.div`
  position: absolute;
  top: 100%;
  /* left: 0; */
  background-color: var(--secondary-color-light);
  color: #fff;
  width: 267px;
  height: 235px;
  padding: 26px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 3px solid;
  border-color: var(--primary-color);
  border-radius: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  transition: transform 0.5s ease;
  font-size: large;


  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
    cursor: pointer;
  }

  li:hover {
    color: var(--primary-color);
  }
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border: 3px solid;
  border-color: var(--primary-color);
  margin-right: 1rem;
  height: 36px;
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
  border: 1px solid;
  border-radius: 18px;
  height: 28px; /* Set a fixed height for the ToggleButton */
  width: 60px; /* Set a fixed width for the ToggleButton */
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
  width: 70px;
  height: 60px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  background-color: var(--secondary-color-light);
  align-items: center;
  transition: transform 0.3s ease;

  span {
    width: 100%;
    height: 4px;
    background-color: var(--primary-color);
    transition: all 0.3s ease;
  }

  /* Apply styles when menu is open */
  ${props =>
    props.isOpen &&
    `
    span:nth-child(1) {
      transform: translateY(10px) rotate(135deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: translateY(-16px) rotate(-135deg);
    }
  `}
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
  width: 123px;
  transition:
    background-color 0.5s ease,
    transform 0.5s ease;
  height: 37px; /* Set a fixed height for the SearchButton */
  img {
    width: 20px; /* Set the width of the image */
    height: 20px; /* Set the height of the image */
    margin-right: 5px; /* Add some right margin for spacing */
  }
  &:hover {
    background-color: #eae6e6;
    transform: translateY(-5px);
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
  height: 44px; /* Set a fixed height for the GoogleButton */
  width: 199px;
  margin-right: 1.5rem;
  &:hover {
    background-color: #eae6e6;
  }
`;

//setting button

export const SettingIcon = styled.img`
  width: 28px; /* Set the width of the image */
  height: 30px; /* Set the height of the image */
  margin-right: 1.5rem;
  transition: transform 0.5s ease; /* Add some right margin for spacing */
  &:hover {
    transform: rotate(180deg) scale(1.2); /* Rotate by 180 degrees and increase size by 20% */
  }
`;
