import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <section>
      <div className="w-full fixed z-10 glass-header  h-16 flex place-items-center justify-between pr-3 md:pr-12">
        <div className="text-white">LOGO HERE</div>
        <div className="flex gap-6 place-items-center">
          <div>
            <input className=" py-2 btn w-96 rounded-lg outline-none " />
          </div>
          <div className="text-white text-lg font-semibold">Drops</div>
          <div className="text-white text-lg font-semibold">Create</div>
        </div>
        <div className="flex gap-5 md:gap-6">
          <NavLink to="/Login">
            {' '}
            <button className="md:px-7 text-white btn   py-1.5  md:text-base text-sm px-4 font-medium rounded-lg">
              Login
            </button>
          </NavLink>
          <NavLink to="/SignUp">
            <button className="md:px-5 text-white hover:bg-purple-500 bg-purple-600 py-2 px-3 md:text-base text-sm font-medium rounded-lg">
              Sign Up
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Header;
