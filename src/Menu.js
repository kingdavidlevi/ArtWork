import React, { useState } from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import { useOutletContext, useNavigate, NavLink } from 'react-router-dom';
import {
  FaGreaterThan,
  FaV,
  FaCalendar,
  FaCommentDots,
  FaUsers,
  FaPencil,
} from 'react-icons/fa6';

function Menu({ isOpen, setIsOpen }) {
  const [toggleDrops, setToggleDrops] = useState(false);
  const navigate = useNavigate();
  const terms = () => {
    setIsOpen(false);
    navigate('/Terms');
  };

  const Privacy = () => {
    setIsOpen(false);
    navigate('/PrivacyPolicy');
  };
  const routeToLogin = () => {
    navigate('Login');
  };
  /*</div>*/
  const cancel = () => {
    setIsOpen(false);
  };
  const drops = () => {
    setToggleDrops((prevstate) => !prevstate);
  };

  const home = () => {
    navigate('/');
  };
  return (
    <div
      className={` z-20 bg-black fixed top-0 w-full h-full  sm:hidden mt-18 menu ${
        isOpen ? 'open fixed ' : ''
      }`}
    >
      <ul className="flex px-4  text-red-600  cursor-pointer justify-end w-full ul items-center  h-20 ">
        <li className="flex  items-center gap-3 w-full" onClick={drops}>
          <FaCalendar className="text-white  text-2xl" />
          <p className="text-white  text-base font-semibold">Drops</p>
        </li>

        <li className={`icon ${toggleDrops ? 'icon-rotated mt-2' : 'mt-2'}`}>
          <FaGreaterThan
            className="font-bold text-sm text-white"
            onClick={drops}
          />
        </li>
      </ul>
      {toggleDrops && (
        <div className=" px-4  ul   cursor-pointer  w-full ul items-center  ">
          <a href="#Popular">
            <div
              className="flex text-white     h-20 items-center"
              onClick={cancel}
            >
              <p className="text-base font-semibold"> Popular</p>
            </div>
          </a>
          <a href="#Trending">
            <div
              className="flex text-white     h-20 items-center"
              onClick={cancel}
            >
              <p className="text-base font-semibold"> Trending</p>
            </div>
          </a>
          <a href="#Latest">
            <div
              className="flex text-white     h-20 items-center"
              onClick={cancel}
            >
              <p className="text-base font-semibold">Latest</p>
            </div>
          </a>
        </div>
      )}
      <ul
        className="flex px-4    cursor-pointer justify-end w-full ul items-center  h-20 "
        onClick={routeToLogin}
      >
        <li className="flex  items-center gap-3 w-full">
          <FaPencil className="text-white  text-2xl" />
          <p className="text-white  text-base font-semibold">Create</p>
        </li>
      </ul>
      <NavLink to="/SignUp">
        <ul className=" px-4  flex   cursor-pointe  w-full ul items-center  h-20 ">
          <p className="text-white  text-base font-semibold">SignUp</p>
        </ul>
      </NavLink>

      <section className=" grid z-10 bg-black  fixed bottom-0 place-items-center w-full">
        <section className="ful mb-4 w-90%  pt-6 md:flex  grid place-items-center md:items-start md:justify-between">
          <div>
            <p className="text-white gap-2 flex text-sm">
              <FaRegCopyright className="text-sm mt-0.5" /> 2019 - 2024
              StrokesArtify, Inc
            </p>
          </div>
          <div className="flex mt-3 lg:mt-0 gap-4">
            <p
              className="text-white hover:underline cursor-pointer text-sm"
              onClick={Privacy}
            >
              Privacy Policy{' '}
            </p>
            <p
              className="text-white hover:underline cursor-pointer text-sm"
              onClick={terms}
            >
              Terms of Services
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Menu;
