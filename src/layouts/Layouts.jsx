import Navbar from '@/shared/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-screen-xl mx-auto px-3'>
        <Outlet />
      </div>
    </>
  );
};

export default Layouts;