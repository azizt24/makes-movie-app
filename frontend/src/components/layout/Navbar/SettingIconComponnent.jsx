import {SettingIcon} from './Navbar.styles';
import Setting from '../../../assets/Setting2.svg';
import PurpleSetting from '../../../assets/purpleSettingSvg.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const SettingIconComponnent = () => {

  const navigate = useNavigate();
  const theme = useSelector((state) => state.ui.theme); 

  return (
    <SettingIcon src={theme === 'dark' ? PurpleSetting : Setting} alt="Settings"  onClick ={ ()=> {navigate('/settings')}}  />
  );
};
export default SettingIconComponnent;

