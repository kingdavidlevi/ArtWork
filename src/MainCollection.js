import React, { useEffect, useState } from 'react';
import MainTrending from './MainTrending';
import { FaArrowRight } from 'react-icons/fa';
import pic from '../src/Images/images (9).jpeg';
import MainLatest from './MainLatest';

//<MainLatest />
//<MainTrending />

/*  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      setIsScrolling(true);

      // Clear the previous timeout if the user scrolls again
      clearTimeout(timeout);
      // Set a timeout to remove the scroll-active class after scrolling stops
      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 2000); // 1 second delay before fading out
    };

    // Add event listener for scrolling
    const scrollContainer = document.querySelector('.scroll-container');
    scrollContainer.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);*/
function MainCollection({ navigateExplore, setNavigateExplore }) {
  const [isScrolling, setIsScrolling] = useState(false);

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
    </section>
  );
}

export default MainCollection;
