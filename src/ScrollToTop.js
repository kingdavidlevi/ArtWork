import { Outlet, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function ScrollToTop() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Outlet context={{ isOpen, setIsOpen }} />
    </div>
  );
}

export default ScrollToTop;
