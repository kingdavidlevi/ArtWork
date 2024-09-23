import { Outlet, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './footer';

function ScrollToTop() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={` ${
        isOpen
          ? 'bg-black md:px-8 h-full w-full pb-20 fixed '
          : 'bg-black md:px-8 fixed pb-20 w-full'
      }`}
    >
      <Header />
      <Outlet context={{ isOpen, setIsOpen }} />
      <Footer />
    </div>
  );
}

export default ScrollToTop;
