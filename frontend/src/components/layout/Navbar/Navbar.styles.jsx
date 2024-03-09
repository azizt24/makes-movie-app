import styled, { keyframes } from 'styled-components';
import { MdLocalMovies } from 'react-icons/md';
import { RxAvatar } from "react-icons/rx";
import { FaStar } from 'react-icons/fa';


export const NavbarContainer = styled.nav`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${props => (props.isToggled ? 'var(--DarkModePurplelight)' : 'var(--secondary-color-light)')};
  color: #fff;
  width: 100%;
  height: 67px;
  z-index: 10;
  position: fixed;

 
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
  }
   
`;

export const LeftSide = styled.div`
  position: relative;
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
   
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-120%);
  }
   
`;

export const MenuBox = styled.div`
  position: absolute;
  z-index: 10;
  top: 100%;
  background-color: ${props =>
    props.isToggled
      ? 'var(--DarModeBodyColor)'
      : 'var(--secondary-color-light)'};
  color: #fff;
  width: 267px;
  height: 235px;
  padding: 26px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 3px solid;
  border-color: ${props =>
    props.isToggled ? 'var(--DarkMOdePurple)' : 'var(--primary-color)'};
  border-radius: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  animation:
    ${props => (props.isMenuOpen ? slideIn : slideOut)} 0.5s ease-out forwards;
    
  font-size: large;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
    cursor: pointer;

    a{
      color: white;
      
      &:hover {
        color: var(--primary-color);
      }
    }
  }


  @media (max-width: 768px) {
    width: 270px;
    height: 260px; 
    margin-left: -2rem;
  }
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border: 3px solid;
  border-color: ${props =>
    props.$isToggled ? 'var(--DarkMOdePurple)' : 'var(--primary-color)'};
  margin-right: 1rem;
  height: 36px;
  width: 180px;
  @media (max-width: 768px) {
    width: 130px;
    height: 27px; 
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ToggleButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${props =>
    props.isToggled ? 'var(--DarkMOdePurple)' : 'var(--primary-color)'};
  border: 1px solid;
  border-radius: 18px;
  height: 28px; 
  width: 60px; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 20px; 
    margin-right: 2rem;
  }
`;


export const HamburgerIcon = styled.div`
  width: 70px;
  height: 60px;
  
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  background-color: ${props =>
    props.isToggled
      ? 'var(--DarkModePurplelight)'
      : 'var(--secondary-color-light)'};
  align-items: center;
  transition: transform 0.3s ease;
  z-index: 10;
  span {
    width: 100%;
    height: 4px;
    background-color: ${props =>
      props.isToggled ? 'var(--DarkMOdePurple)' : 'var(--primary-color)'};
    transition: all 0.3s ease;
  }


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

export const HamburgerLines = styled.span`
  width: 100%;
  height: 3px;
  background-color: var(--primary-color);
  transition: all 0.3s ease;
`;


export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: ${props =>
    props.isToggled ? 'var(--DarkMOdePurple)' : 'var(--primary-color)'};
  color: #111010;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 123px;
  transition: transform 0.5s ease;
  height: 37px; 
  img {
    width: 20px;
    height: 20px; 
    margin-right: 5px; 
  }
  &:hover {
    background-color: #eae6e6;
    transform: translateY(-5px);
  }
  @media (max-width: 768px) {
    width: 90px;
    height: 27px; 
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
  height: 44px; 
  width: 199px;
  margin-right: 1.5rem;
  &:hover {
    background-color: #eae6e6;
  }
`;



export const SettingIcon = styled.img`
  width: 28px;
  height: 30px;
  margin-right: 1.5rem;
  cursor: pointer;
  transition: transform 0.5s ease;
  &:hover {
    transform: rotate(180deg) scale(1.2);
  }
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

//mobile

export const FlexContainerAbove = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 245px;
  height: 36px;
`;

export const FlexContainerBelow = styled.div`
  display: flex;
  align-items: flex-start;
  width: 264px;
  height: 35px;
  margin-bottom: 1rem;
`;

export const MobileFlex = styled.div`
  margin-top: -2rem;
  display: flex;
  flex-direction: column;
`;

export const MobileList = styled.div`
  font-size: 14px;
  height: 140px;
`;
 
 

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchResultsBox = styled.div`
  position: absolute;
  top: 68px;
  right: 0;
  z-index: 10;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  width: 330px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SearchResultItem = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;  
  margin-bottom: 0.5rem;
  text-align: center;  
`;

export const Avatar = styled.img`
  width: 40px;  
  height: 40px;  
  margin-right: 10px;
`;

export const MoviePoster = styled.img`
  width: 40px;  
  height: 60px;  
  margin-right: 10px;
`;

export const ActorOrDirector = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const MovieTitle = styled.div`
  margin-right: 5px;
`;

export const MovieYear = styled.div`
  margin-right: 5px;
`;

export const MovieRating = styled.div`
  margin-right: 5px;
`;

export const IconWrapper = styled.div`
  margin-right: 5px;
`;

export const MovieIcon = styled(MdLocalMovies)`
  margin-right: 1px;
`;

export const AvatarIcon = styled(RxAvatar)`
  margin-right: 1px;
`;

export const StarIcon = styled(FaStar)`
  margin-right: 1px;
` ;

export const AvatarImage = styled.img`
width: 40px;  
  height: 60px;  
  margin-right: 10px;
  
`;
export const SearchResultImage = styled.img`
  width: 30%;
   
  object-fit: cover;  
  height:60px;  
`;

export const SearchResultRating = styled.span`
  display: block;
  color: #ffb400;  
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

export const SearchResultSubText = styled.span`
  display: block;
  color: #666;
  font-size: 0.8rem;
`;

export const SearchResultText = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  text-align: center;
`;

export const SearchResultTitle = styled.h3`
  font-size: 1rem;
  color: #333;
  margin: 0.5rem 0;
`;