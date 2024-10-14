import { Outlet, useLocation, useOutletContext } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './footer';

function ScrollToTop() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        className={` ${
          isOpen
            ? 'bg-black md:px-8 overflow-hidden fixed h-full w-full pb-20 '
            : 'bg-black md:px-8  pb-20 w-full'
        }`}
      >
        <Outlet context={{ isOpen, setIsOpen }} />
        <Footer />
      </div>
    </section>
  );
}

export default ScrollToTop;
