import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from './../Footer/Footer';
import MoviesPage from '../../../pages/MoviesPage/MoviesPage';

const SharedLayout = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <Navbar isToggled={isToggled} setIsToggled={setIsToggled} />
      <MoviesPage/>

      <Outlet />
      <Footer isToggled={isToggled} />
    </>
  );
};
export default SharedLayout;
