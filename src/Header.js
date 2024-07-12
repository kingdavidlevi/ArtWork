import React from 'react';

function Header() {
  return (
    <section>
      <div className="w-full fixed z-10 bg-blue-900 h-16 flex place-items-center justify-between pr-3 md:pr-12">
        <div className="text-white">LOGO HERE</div>
        <div className="flex gap-5 md:gap-6">
          <button className="md:px-8 text-white hover:bg-red-400 bg-red-500 py-2  md:text-base text-sm px-4 font-medium rounded-lg">
            Login
          </button>
          <button className="md:px-6 text-white hover:bg-purple-500 bg-purple-600 py-2 px-3 md:text-base text-sm font-medium rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
      <div className="picture md:h-250 h-75 grid place-content-center w-full ">
        {' '}
        <h1 className="font-bold  sm:text-8xl text-6xl md:text-9xl lg:text-12xl nft-font text-white">
          Artify Nft's
        </h1>
        <p className="text-white font-bold mt-4 md:mt-8 md:text-3xl grid place-items-center ">
          Market limitless outstanding nft
        </p>
      </div>
    </section>
  );
}

export default Header;
