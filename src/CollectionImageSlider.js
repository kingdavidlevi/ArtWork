import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img from './Images/download (6).jpeg';
const CollectionImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const create = () => {
    navigate('/CreateCollection');
  };
  return (
    <div className="image-container  relative   w-full  md:h-52   h-40  ">
      <img
        className="w-full  md:h-52   h-40 "
        src={img}
        style={{ backgroundImage: `url(${img})` }} // Use backgroundImage to cover the container
      />
      <div className="absolute  w-full  grid place-items-center  z-20 bottom-8">
        <div className="w-90% ">
          {' '}
          <p
            className="text-white cursor-pointer md:text-4xl text-3xl font-semibold"
            onClick={create}
          >
            My Collections
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionImageSlider;
