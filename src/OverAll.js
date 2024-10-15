import { Outlet, useLocation, useOutletContext } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './Header';
//<Header isOpen={isOpen} setIsOpen={setIsOpen} />
function OverAll() {
  const location = useLocation();
  const [latestCollection, setLatestCollection] = useState('');
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [handleChat, sethandleChat] = useState(false);
  const Id = localStorage.getItem('Id');
  const [Logininputs, setLoginInputs] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      };
      try {
        const res = await fetch(
          `https://artifynft.onrender.com/user/${Id}`,
          options,
        );
        const data = await res.json();
        if (data) {
          setUser(data);
          sethandleChat(true);
        }
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    Id && fetchUser();
  }, [Id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Outlet
        context={{
          Logininputs,
          setLoginInputs,
          latestCollection,
          setLatestCollection,
          user,
          error,
          handleChat,
          setUser,
        }}
      />
    </div>
  );
}

export default OverAll;
