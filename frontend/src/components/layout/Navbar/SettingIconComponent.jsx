import {SettingIcon} from './Navbar.styles';
import Setting from '../../../assets/Setting2.svg';
import PurpleSetting from '../../../assets/purpleSettingSvg.svg';

const SettingIconComponnent = ({ isToggled }) => {
  return (
    <SettingIcon src={isToggled ? PurpleSetting : Setting} alt="Settings" />
  );
};
export default SettingIconComponnent;

