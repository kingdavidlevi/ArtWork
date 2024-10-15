import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Trending from './Trending';
import Latest from './Latest';
import Popular from './Popular';
import LandingPhoto from './LandingPhoto';

function Collection() {
  return (
    <section className=" md:w-full grid md:place-items-start place-items-center">
      <div className="md:mt-16 mt-10 w-90% md:w-full place-items-center  flex gap-2  ">
        <h1 className="text-white text-lg font-semibold lg:text-2xl md:text-lg md:font-bold">
          Latest Collection
        </h1>
        <FaArrowRight className="text-white mt-1 md:mt-1.5" />
      </div>
      <Latest />
      <div className="mt-8 w-90% md:w-full place-items-center  flex gap-2  ">
        <h1 className="text-white text-lg font-semibold lg:text-2xl md:text-lg md:font-bold">
          Trending Collection
        </h1>
        <FaArrowRight className="text-white mt-1 md:mt-1.5" />
      </div>
      <Trending />
      <div className="mt-8 w-90% md:w-full place-items-center  flex gap-2  ">
        <h1 className="text-white text-lg font-semibold lg:text-2xl md:text-lg md:font-bold">
          Popular Collection
        </h1>
        <FaArrowRight className="text-white mt-1 md:mt-1.5" />
      </div>
      <Popular />
      <div className="mt-8 w-90% md:w-full place-items-center  flex gap-2  ">
        <h1 className="text-white text-lg font-semibold lg:text-2xl md:text-lg md:font-bold">
          photography
        </h1>
        <FaArrowRight className="text-white mt-1 md:mt-1.5" />
      </div>
      <LandingPhoto />
    </section>
  );
}

export default Collection;
