import {SettingIcon} from './Navbar.styles';
import Setting from '../../../assets/Setting2.svg';
import PurpleSetting from '../../../assets/purpleSettingSvg.svg';
import { useNavigate } from 'react-router-dom';


const SettingIconComponnent = ({ isToggled }) => {

  const navigate = useNavigate();
  return (
    <SettingIcon src={isToggled ? PurpleSetting : Setting} alt="Settings"  onClick ={ ()=> {navigate('/settings')}}  />
  );
};
export default SettingIconComponnent;

