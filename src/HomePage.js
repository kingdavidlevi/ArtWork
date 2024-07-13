import React from 'react';
import Header from './Header';
import { FaCommentDots } from 'react-icons/fa';
function Homepage() {
  return (
    <div>
      <Header />
      <div className="picture md:h-250 h-68 grid place-content-center w-full ">
        {' '}
        <h1 className="font-bold  sm:text-8xl text-6xl md:text-9xl lg:text-12xl nft-font text-white">
          Artify Nft's
        </h1>
        <p className="text-yellow-400 font-bold mt-4 md:mt-8 md:text-3xl grid place-items-center ">
          Market limitless outstanding nft
        </p>
      </div>
      <div className=" mt-6 paragraph-container bg-black py-2">
        <div className=" sliding-paragraph">
          <p className="text-gray-300 text-lg font-semibold md:text-xl md:font-bold">
            Welcome to our NFT minting site! Enjoy seamless minting with low
            fees and user-friendly interfaces. Our platform ensures top-notch
            security for your digital assets. Experience fast transactions,
            detailed analytics, and personalized support.
          </p>
        </div>
      </div>
      <div className="w-12 bottom-5 h-12 z-10  grid border right-5 absolute border-blue-200 place-content-center rounded-full bg-blue-500">
        {' '}
        <FaCommentDots className="text-blue-100 w-6 h-6" />
      </div>
    </div>
  );
}

export default Homepage;
