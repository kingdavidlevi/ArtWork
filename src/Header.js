import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaWallet, FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <section>
      <div className="w-full fixed z-10 glass-header  h-18 flex place-items-center justify-between pr-3 md:pr-12">
        <div className="text-white">LOGO HERE</div>
        <div className="flex gap-12 place-items-center">
          <div className="relative">
            <FaSearch className="absolute mt-3.5 ml-4 text-white  text-lg" />
            <input
              className=" py-2.5  text-white text-base pl-12 btn w-96 rounded-lg outline-none placeholder:text-lg placeholder:text-white "
              placeholder="Search"
            />
          </div>
          <div className="text-white ml-10 text-lg font-semibold">Drops</div>
          <div className="text-white text-lg font-semibold">Authors</div>

          <NavLink to="/SignUp">
            <div className="text-white text-lg font-semibold">Create</div>
          </NavLink>
        </div>
        <div className="flex gap-5 md:gap-6">
          <NavLink to="/Login">
            {' '}
            <FaWallet className="text-white ml-3 absolute mt-3" size={18} />
            <button className="md:pr-4 md:pl-10 text-white btn   py-2  md:text-base text-sm px-4 font-medium rounded-lg">
              Login
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Header;
