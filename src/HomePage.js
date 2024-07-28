import React from 'react';
import Header from './Header';
import Collection from './Collection';
import { useOutletContext } from 'react-router-dom';

import { FaGreaterThan, FaCalendar, FaCommentDots } from 'react-icons/fa6';
function Homepage() {
  const { isOpen, setIsOpen } = useOutletContext();
  return (
    <div className="bg-black md:px-8 h-screen ">
      <Header />

      <div
        className={`   fixed h-full w-full sm:hidden mt-18 menu ${
          isOpen ? 'open' : ''
        }`}
      >
        <ul className="flex px-4  text-red-600  cursor-pointer justify-end w-full ul items-center  h-20 ">
          <li className="flex  items-center gap-3 w-full">
            <FaCalendar className="text-white  text-2xl" />
            <p className="text-white  text-base font-semibold">Drops</p>
          </li>
          <li>
            <FaGreaterThan className="font-bold text-sm text-white" />
          </li>
        </ul>
      </div>
      {!isOpen && (
        <div>
          <div className="picture md:h-250 h-68 grid place-content-center w-full ">
            {' '}
            <h1 className="md:font-bold font-medium sm:text-8xl text-6xl md:text-9xl lg:text-12xl nft-font text-white">
              Artify Nft's
            </h1>
            <p className="text-yellow-400 md:font-bold font-medium mt-4 md:mt-8 md:text-3xl grid place-items-center ">
              Market limitless outstanding nft
            </p>
          </div>
          <div className=" mt-6 paragraph-container  btn py-2">
            <div className=" sliding-paragraph">
              <p className="text-gray-300 text-sm font-semibold md:text-xl md:font-bold">
                Welcome to our NFT minting site! Enjoy seamless minting with low
                fees and user-friendly interfaces. Our platform ensures
                top-notch security for your digital assets. Experience fast
                transactions, detailed analytics, and personalized support.
              </p>
            </div>
          </div>
          <div className="w-14  bottom-8 h-14 z-10  grid border right-8 absolute border-blue-200 place-content-center rounded-full bg-blue-500">
            {' '}
            <FaCommentDots className="text-blue-100 w-7 h-7 " />
          </div>

          <Collection />
        </div>
      )}
    </div>
  );
}

export default Homepage;
