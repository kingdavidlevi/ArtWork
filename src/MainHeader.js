import React, { useState, useEffect } from 'react';
import { NavLink, useOutletContext, useNavigate } from 'react-router-dom';
import { FaSearch, FaWallet, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import MainMenu from './MainMenu';
import Wallet from './Wallet';
import { FaArrowLeft } from 'react-icons/fa';
import { FaLessThan } from 'react-icons/fa6';
import logo from './Images/DALL·E 2024-10-09 12.40.06 - A completely unique, random logo with abstract shapes and patterns, blending bold, contrasting colors like vibrant orange, electric blue, and neon gre.webp';

function MainHeader({
  isOpen,
  setIsOpen,
  explorer,
  setExplorer,
  walletOpen,
  setWalletOpen,
}) {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleShowDiv, setToggleShowDiv] = useState(false);
  const [search, setSearch] = useState('');
  const { user, setUser } = useOutletContext();
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleSearchBtn = () => {
    setToggleSearch(!toggleSearch);
    setIsOpen(false);
    setWalletOpen(false);
  };
  const handleInput = (e) => {
    const data = e.target.value;
    setSearch(data);
  };

  const removeText = () => {
    setSearch('');
  };

  const home = () => {
    setExplorer((prevstate) => !prevstate);
    navigate('/');
  };

  const showdiv = () => {
    setToggleShowDiv(true);
  };
  const hidediv = () => {
    setToggleShowDiv(false);
  };

  const toggleWallet = () => {
    setWalletOpen((prevstate) => !prevstate);
    setIsOpen(false);
  };
  const toggleHeaderWallet = () => {
    setWalletOpen(false);
  };
  const Nft = () => {
    navigate('CreateNft');
  };
  const LogOut = () => {
    localStorage.removeItem('Id');
    navigate('HomePage');
  };

  const routeMycollection = () => {
    navigate('CreateNft');
  };
  return (
    <section>
      {!toggleSearch ? (
        <div className="w-full md:px-8 px-3   z-20 glass-header  h-18 flex place-items-center justify-between ">
          <div
            className=" relative flex xl:gap-10 gap-5 "
            onClick={toggleHeaderWallet}
          >
            <div className="text-white Artify-div  cursor-pointer md:pr-6">
              {explorer ? (
                <div
                  className=" cursor-pointer  h-8 w-8 rounded-full grid left-6 top-4  dropdown-li place-items-center z-20"
                  onClick={home}
                >
                  <FaArrowLeft className="text-white text-base md:text-lg  " />
                </div>
              ) : (
                <p className="lg:text-2xl text-xl font-semibold ">
                  StrokesArtify
                </p>
              )}
            </div>

            <div className="text-white cursor-pointer   text-lg hidden md:block hover:text-gray-200 font-semibold">
              <p onMouseEnter={showdiv} onMouseLeave={hidediv}>
                {' '}
                Drops
              </p>
            </div>
            <section className="absolute">
              {toggleShowDiv && (
                <div
                  className="h-4 absolute bg-black lg:left-40  w-12 xl:left-45 xl:w-14 left-36 top-7 "
                  onMouseEnter={showdiv}
                  onMouseLeave={hidediv}
                ></div>
              )}
            </section>

            <section className="absolute">
              {toggleShowDiv && (
                <div
                  className="absolute dropdown lg:left-40 xl:left-45 left-36 px-2 top-10 z-40 rounded-md w-60 py-2 "
                  onMouseEnter={showdiv}
                  onMouseLeave={hidediv}
                >
                  <ul>
                    <a href="#MainPopular">
                      <li className=" dropdown-li cursor-pointer text-base font-medium  text-white flex rounded-md pl-4 items-center h-14">
                        Popular
                      </li>
                    </a>
                    <a href="#MainTrending">
                      <li className=" dropdown-li cursor-pointer text-base font-medium  text-white flex rounded-md pl-4 items-center h-14">
                        Trending
                      </li>
                    </a>
                    <a href="#MainLatest">
                      <li className=" dropdown-li cursor-pointer text-base font-medium  text-white flex rounded-md pl-4 items-center h-14">
                        Latest
                      </li>
                    </a>
                  </ul>
                </div>
              )}
            </section>

            <div
              className="text-white cursor-pointer hover:text-gray-200  hidden md:block text-lg font-semibold"
              onClick={Nft}
            >
              Create
            </div>
            <div
              className="text-white cursor-pointer hover:text-gray-200  hidden md:block text-lg font-semibold"
              onClick={LogOut}
            >
              Logout
            </div>
          </div>

          <div
            className="flex gap-12 place-items-center"
            onClick={toggleHeaderWallet}
          >
            <div className="relative">
              <FaSearch className="md:absolute lg:block mt-3.5 ml-4 text-white hidden  text-lg" />
              <input
                className=" py-2.5  lg:block hidden text-white text-base pl-12 pr-8 btn xl:w-98 lg:w-75 w-70 rounded-lg outline-none placeholder:text-base placeholder:text-white "
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
              className="  mt-3.5 ml-4 text-white lg:hidden sm:block cursor-pointer hidden text-lg"
              onClick={toggleSearchBtn}
            />{' '}
            <div onClick={toggleWallet} className="z-30">
              <FaWallet className="text-white ml-3 text-base md:text-lg absolute font mt-3" />
              <button className="pr-4 pl-10 text-white btn py-2  md:py-2  md:text-base text-base px-4 font-normal md:font-medium rounded-lg">
                Wallet
              </button>
            </div>
            <FaSearch
              className="   mt-3.5   text-white  sm:hidden block   text-lg"
              onClick={toggleSearchBtn}
            />
            <div
              className=" hidden cursor-pointer py-2 px-4 btn md:grid place-items-center rounded-lg "
              onClick={routeMycollection}
            >
              <p className="text-white  font-normal md:font-medium  text-base">
                My Collections
              </p>
            </div>
            {!isOpen ? (
              <FaBars
                className="text-white mt-3 md:hidden text-xl"
                onClick={toggleMenu}
              />
            ) : (
              <FaTimes
                className="text-white mt-3 md:hidden text-xl"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="h-18  sm:pl-8 pl-5   flex  z-20  gap-4 items-center w-full glass-header">
          <div className="text-white ">
            <FaLessThan
              className=" font-normal text-base text-gray-300 "
              onClick={toggleSearchBtn}
            />
          </div>
          <input
            placeholder="Search"
            className="border-none pr-14  outline-none font-medium w-full text-white text-base placeholder:font-normal  placeholder:text-base  bg-black placeholder:text-gray-300 "
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
      <MainMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {walletOpen && (
        <Wallet walletOpen={walletOpen} setWalletOpen={setWalletOpen} />
      )}
    </section>
  );
}

export default MainHeader;
