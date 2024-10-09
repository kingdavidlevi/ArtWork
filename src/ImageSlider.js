import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Automatically change the image every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

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
      <div className="absolute left-14 z-20 lg:hidden bottom-8">
        <p className="text-white md:text-4xl text-3xl font-semibold">Create</p>
      </div>
    </div>
  );
};

export default ImageSlider;
