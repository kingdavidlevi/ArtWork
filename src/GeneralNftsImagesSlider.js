import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img from './Images/download (6).jpeg';
const GeneralNftsImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="image-container  relative   w-full  md:h-52   h-40  ">
      <img
        className="w-full  md:h-52   h-40 "
        src={img}
        style={{ backgroundImage: `url(${img})` }} // Use backgroundImage to cover the container
      />
    </div>
  );
};

export default GeneralNftsImageSlider;
