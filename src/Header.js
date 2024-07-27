import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaWallet, FaSearch, FaUser } from 'react-icons/fa';

function Header() {
  return (
    <section>
      <div className="w-full px-8 fixed z-10 glass-header  h-18 flex place-items-center justify-between ">
        <div className=" flex xl:gap-10 gap-5 ">
          <div className="text-white Artify-div  pr-6">
            <p className="lg:text-2xl text-xl font-semibold ">Artify Nft's</p>
          </div>
          <div className="text-white text-lg hidden sm:block font-semibold">
            Drops
          </div>
          <div className="text-white text-lg hidden sm:block font-semibold">
            Authors
          </div>

          <NavLink to="/SignUp">
            <div className="text-white hidden sm:block text-lg font-semibold">
              Create
            </div>
          </NavLink>
        </div>

        <div className="flex gap-12 place-items-center">
          <div className="relative">
            <FaSearch className="md:absolute lg:block mt-3.5 ml-4 text-white hidden  text-lg" />
            <input
              className=" py-2.5 lg:block hidden text-white text-base pl-12 btn xl:w-98 lg:w-82 w-70 rounded-lg outline-none placeholder:text-lg placeholder:text-white "
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex gap-5 md:gap-6">
          <FaSearch className="  mt-3.5 ml-4 text-white lg:hidden sm:block hidden text-lg" />
          <NavLink to="/Login">
            {' '}
            <FaWallet className="text-white ml-3 absolute mt-3" size={18} />
            <button className="pr-4 pl-10 text-white btn py-2  md:py-2  md:text-base text-base px-4 font-medium rounded-lg">
              Login
            </button>
          </NavLink>
          <FaSearch className="   mt-3.5  text-white  sm:hidden block   text-lg" />
          <div className="w-10 hidden cursor-pointer h-10 btn sm:grid place-items-center rounded-lg ">
            <FaUser className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
