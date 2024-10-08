import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    // Automatically change the image every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);
  const create = () => {
    navigate('/CreateCollection');
  };
  return (
    <div className="image-container  relative  w-full md:h-68 h-52  lg:h-full   ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-slide lg:h-full ${
            index === currentIndex ? 'active' : ''
          }`}
          style={{ backgroundImage: `url(${image})` }} // Use backgroundImage to cover the container
        ></div>
      ))}
      <div className="absolute  w-full  grid place-items-center  z-20 lg:hidden bottom-8">
        <div className="w-90% md:w-80%">
          {' '}
          <p
            className="text-white cursor-pointer md:text-4xl text-3xl font-semibold"
            onClick={create}
          >
            Create
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
