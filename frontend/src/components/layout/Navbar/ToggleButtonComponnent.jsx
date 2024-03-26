import ToggleOff from '../../../assets/ToggleOff1.png';
import ToggleOn from '../../../assets/ToggleIn1.png';
import { ToggleButton } from './Navbar.styles';

const ToggleButtonComponnent = ({ onClick, isToggled }) => {
  return (
    <ToggleButton onClick={onClick} isToggled={isToggled}>
      <img src={isToggled ? ToggleOn : ToggleOff} alt="Toggle" />
    </ToggleButton>
  );
};
export default ToggleButtonComponnent;
