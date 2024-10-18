import React from 'react';
import Header from './Header';
import Collection from './Collection';
import Trending from './Trending';
import Footer from './footer';
import { useOutletContext } from 'react-router-dom';
import Menu from './Menu';

import {
  FaGreaterThan,
  FaCalendar,
  FaCommentDots,
  FaUsers,
  FaPencil,
} from 'react-icons/fa6';
import AboutUs from './AboutUs';
/**/
function Homepage() {
  const { isOpen, setIsOpen } = useOutletContext();

  return (
    <div>
      <div className="picture md:h-250 h-68 grid place-content-center w-full ">
        {' '}
        <h1 className="md:font-bold font-medium sm:text-8xl text-5xl md:text-9xl lg:text-9xl nft-font text-white">
          StrokesArtify
        </h1>
        <p className="text-white md:font-bold font-medium mt-4 md:mt-8 md:text-3xl grid place-items-center ">
          Market limitless outstanding nft
        </p>
      </div>
      <div className=" mt-6 paragraph-container  btn py-2">
        <div className=" sliding-paragraph">
          <p className="text-gray-300 text-sm font-semibold md:text-xl md:font-bold">
            Welcome to our NFT minting site! Enjoy seamless minting with low
            fees and user-friendly interfaces. Our platform ensures top-notch
            security for your digital assets. Experience fast transactions,
            detailed analytics, and personalized support.
          </p>
        </div>
      </div>

      <Collection />

      <AboutUs />
    </div>
  );
}

export default Homepage;
