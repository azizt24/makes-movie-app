import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from './../Footer/Footer';
import Pagination from '../../Pagination/Pagination';

const SharedLayout = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <Navbar isToggled={isToggled} setIsToggled={setIsToggled} />
      <Pagination />
      <Outlet />
      <Footer isToggled={isToggled} />
    </>
  );
};
export default SharedLayout;
