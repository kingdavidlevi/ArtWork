import ImageSlider from './ImageSlider';
import { useState } from 'react';
import { FaImage } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import testing from './Images/download (2).png';

function MyCollections() {
  const navigate = useNavigate();
  const [nftName, setNftName] = useState('Christopher Art Collections9999');
  const images = [
    require('./Images/pexels-steve-1572386.jpg'),
    require('./Images/pexels-heftiba-1194420.jpg'),
    require('./Images/pexels-mccutcheon-1209843.jpg'),
  ];
  const home = () => {
    navigate(-1);
  };
  const create = () => {
    navigate('/AdminCreateCollection');
  };
  const truncateText = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
  };
  return (
    <section className=" bg-black w-full pb-10 lg:flex  lg:h-full xl:h-full  lg-pb-0 min-h-screen  relative ">
      <div
        className="absolute top-4 left-6 cursor-pointer h-8 w-8 rounded-full grid  dropdown-li place-items-center z-20"
        onClick={home}
      >
        <FaArrowLeft className="text-white text-base md:text-lg  " />
      </div>
      <div className="w-full lg:h-full lg:hidden ">
        {' '}
        <ImageSlider images={images} />
      </div>
      <section className="   lg:ml-10 lg:place-items-start  lg:mt-20   grid w-full  place-items-center lg:place-content-start ">
        <div className="  lg:block  hidden cursor-pointer" onClick={create}>
          <p className="text-white md:text-4xl text-3xl font-semibold">
            My Collections
          </p>
        </div>
      </section>
      <div className="w-full   hidden lg:block ">
        {' '}
        <ImageSlider images={images} />
      </div>
    </section>
  );
}

export default MyCollections;
