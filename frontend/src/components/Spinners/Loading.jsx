import { useSelector } from 'react-redux';
import Spin from './Spin/Spin';
import Film from './Camera/Camera';



export default function Loading() {

   const spinner = useSelector((state) => state.ui.spinner);

  return (
    <div>
    {spinner === 'spin' && <Spin/>}
    {spinner === 'camera' && <Film/>}
    </div>
  )
}
