import React from 'react';
import Header from './Header';
import Collection from './Collection';
import { FaCommentDots } from 'react-icons/fa';
function Homepage() {
  return (
    <div className="bg-black px-8 h-full">
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
      <div className=" mt-6 paragraph-container  btn py-2">
        <div className=" sliding-paragraph">
          <p className="text-gray-300 text-base font-semibold md:text-xl md:font-bold">
            Welcome to our NFT minting site! Enjoy seamless minting with low
            fees and user-friendly interfaces. Our platform ensures top-notch
            security for your digital assets. Experience fast transactions,
            detailed analytics, and personalized support.
          </p>
        </div>
      </div>
      <div className="w-14  bottom-8 h-14 z-10  grid border right-8 absolute border-blue-200 place-content-center rounded-full bg-blue-500">
        {' '}
        <FaCommentDots className="text-blue-100 w-7 h-7 " />
      </div>
      <Collection />
    </div>
  );
}

export default Homepage;
