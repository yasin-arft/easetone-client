import Navbar from '@/shared/Navbar';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
  return (
    <>
      <Navbar />
      <Toaster />
      <div className='container max-w-screen-xl mx-auto px-3'>
        <Outlet />
      </div>
    </>
  );
};

export default Layouts;