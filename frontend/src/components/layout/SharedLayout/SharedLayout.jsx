import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from './../Footer/Footer';
const SharedLayout = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <Navbar isToggled={isToggled} setIsToggled={setIsToggled} />

      <Outlet />

      <Footer isToggled={isToggled} />
    </>
  );
};
export default SharedLayout;
