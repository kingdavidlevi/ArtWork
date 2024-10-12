import React, { useEffect, useState } from 'react';
import MainTrending from './MainTrending';
import { FaArrowRight } from 'react-icons/fa';
import pic from '../src/Images/images (9).jpeg';
import MainLatest from './MainLatest';

function MainCollection() {
  const [data, setData] = useState([]);

  return (
    <section className=" md:w-full grid md:place-items-start place-items-center">
      <div
        className=" md:mt-0 mt-0 w-90% md:w-full place-items-center  flex gap-2  
          "
      >
        <h1 className="text-white text-lg font-semibold lg:text-2xl md:text-lg md:font-bold">
          Latest Collection
        </h1>
        <FaArrowRight className="text-white mt-1 md:mt-1.5" />
      </div>

      <MainLatest />
      <MainTrending />
    </section>
  );
}

export default MainCollection;
