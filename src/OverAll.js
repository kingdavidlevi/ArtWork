import { Outlet, useLocation, useOutletContext } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './Header';
//<Header isOpen={isOpen} setIsOpen={setIsOpen} />
function OverAll() {
  const location = useLocation();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    fullName: '',
    confirmPassword: '',
  });
  const [Logininputs, setLoginInputs] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Outlet
        context={{
          inputs,
          setInputs,
          Logininputs,
          setLoginInputs,
        }}
      />
    </div>
  );
}

export default OverAll;
