import { Outlet, useLocation, useOutletContext } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './Header';
//<Header isOpen={isOpen} setIsOpen={setIsOpen} />
function OverAll() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default OverAll;
