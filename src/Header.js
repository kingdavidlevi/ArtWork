import React, { useState, useEffect } from 'react';

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 0); // 0ms delay to trigger the effect immediately after mount
  }, []);
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
      <div className="picture md:h-250 h-68 grid place-content-center w-full ">
        {' '}
        <h1 className="font-bold  sm:text-8xl text-6xl md:text-9xl lg:text-12xl nft-font text-white">
          Artify Nft's
        </h1>
        <p className="text-white font-bold mt-4 md:mt-8 md:text-3xl grid place-items-center ">
          Market limitless outstanding nft
        </p>
      </div>
      <div className="paragraph-container bg-black py-2">
        <div className=" sliding-paragraph">
          <p className="text-gray-400 text-lg font-semibold md:text-xl md:font-bold">
            Welcome to our NFT minting site! Enjoy seamless minting with low
            fees and user-friendly interfaces. Our platform ensures top-notch
            security for your digital assets. Experience fast transactions,
            detailed analytics, and personalized support.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Header;
