import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Collection() {
  return (
    <div className="mt-20 flex gap-2  ">
      <h1 className="text-white md:pl-8 pl-3 lg:text-xl md:text-lg font-bold">
        Latest Collection
      </h1>
      <FaArrowRight className="text-white mt-1.5 md:mt-2" />
    </div>
  );
}

export default Collection;
