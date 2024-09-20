import React, { useState, useEffect } from 'react';
import { NavLink, useOutletContext, useNavigate } from 'react-router-dom';
import { FaSearch, FaWallet, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import Menu from './Menu';
import { FaLessThan } from 'react-icons/fa6';

function Header() {
  const { isOpen, setIsOpen } = useOutletContext();
  const [toggleSearch, setToggleSearch] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleSearchBtn = () => {
    setToggleSearch(!toggleSearch);
    setIsOpen(false);
  };
  const handleInput = (e) => {
    const data = e.target.value;
    setSearch(data);
  };

  const removeText = () => {
    setSearch('');
  };

  const home = () => {
    navigate('/');
  };
  return (
    <section>
      {!toggleSearch ? (
        <div className="w-full md:px-8 px-3 fixed z-10 glass-header  h-18 flex place-items-center justify-between ">
          <div className=" flex xl:gap-10 gap-5 ">
            <div
              className="text-white Artify-div pr-4 cursor-pointer md:pr-6"
              onClick={home}
            >
              <p className="lg:text-2xl text-xl font-semibold ">Artify Nft's</p>
            </div>
            <div className="text-white cursor-pointer text-lg hidden sm:block hover:text-gray-200 font-semibold">
              Drops
            </div>
            <div className="text-white hover:text-gray-200 cursor-pointer text-lg hidden sm:block font-semibold">
              Authors
            </div>

            <NavLink to="/SignUp">
              <div className="text-white hover:text-gray-200  hidden sm:block text-lg font-semibold">
                Create
              </div>
            </NavLink>
          </div>

          <div className="flex gap-12 place-items-center">
            <div className="relative">
              <FaSearch className="md:absolute lg:block mt-3.5 ml-4 text-white hidden  text-lg" />
              <input
                className=" py-2.5 lg:block hidden text-white text-base pl-12 btn xl:w-98 lg:w-82 w-70 rounded-lg outline-none placeholder:text-base placeholder:text-white "
                placeholder="Search"
                onChange={handleInput}
                value={search}
              />
              {search.length > 0 ? (
                <FaTimes
                  className="text-gray-300 cursor-pointer hover:text-gray-100 top-4 text-base hidden lg:block md:absolute  right-4"
                  onClick={removeText}
                />
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="flex gap-6 md:gap-6">
            <FaSearch
              className="  mt-3.5 ml-4 text-white lg:hidden sm:block hidden text-lg"
              onClick={toggleSearchBtn}
            />
            <NavLink to="/Login">
              {' '}
              <FaWallet className="text-white ml-3 text-base md:text-lg absolute font mt-3" />
              <button className="pr-4 pl-10 text-white btn py-2  md:py-2  md:text-base text-base px-4 font-normal md:font-medium rounded-lg">
                Login
              </button>
            </NavLink>
            <FaSearch
              className="   mt-3.5   text-white  sm:hidden block   text-lg"
              onClick={toggleSearchBtn}
            />
            <div className="w-10 hidden cursor-pointer h-10 btn sm:grid place-items-center rounded-lg ">
              <FaUser className="text-white" />
            </div>

            {!isOpen ? (
              <FaBars
                className="text-white mt-3 sm:hidden text-xl"
                onClick={toggleMenu}
              />
            ) : (
              <FaTimes
                className="text-white mt-3 sm:hidden text-xl"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="h-18  sm:pl-8 pl-5 flex gap-4 items-center w-full glass-header">
          <div className="text-white ">
            <FaLessThan
              className=" font-normal text-base text-gray-300 "
              onClick={toggleSearchBtn}
            />
          </div>
          <input
            placeholder="Search"
            className="border-none pr-14 outline-none font-medium w-full text-white text-base placeholder:font-normal  placeholder:text-base  bg-black placeholder:text-gray-300 "
            onChange={handleInput}
            value={search}
          />
          {search.length > 0 ? (
            <FaTimes
              className="text-gray-300 text-base absolute md:right-8 right-5"
              onClick={removeText}
            />
          ) : (
            ''
          )}
        </div>
      )}
      <Menu />
    </section>
  );
}

export default Header;
