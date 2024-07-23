import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Collection() {
  return (
    <div className="mt-20 flex gap-2 ml-8  ">
      <h1 className="text-blue-950 text-lg font-bold">Latest Collection</h1>
      <FaArrowRight className="text-blue-950 mt-2" />
    </div>
  );
}

export default Collection;
