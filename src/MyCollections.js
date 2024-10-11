import { useState } from 'react';
import { FaImage } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

import CollectionImageSlider from './CollectionImageSlider';

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

  return (
    <section className=" bg-black w-full pb-10    lg-pb-0 min-h-screen  relative ">
      <div
        className="absolute top-4 left-6 cursor-pointer h-8 w-8 rounded-full grid  dropdown-li place-items-center z-20"
        onClick={home}
      >
        <FaArrowLeft className="text-white text-base md:text-lg  " />
      </div>
      <div className="w-full  ">
        {' '}
        <CollectionImageSlider images={images} />
      </div>
      <section className="h-80  grid place-items-center">
        <div className="grid place-items-center">
          <p className="text-white text-xl font-medium">
            You have no NFT in your collection
          </p>
          <button className="bg-blue-600 text-white mt-6 px-8 py-2 rounded-md">
            Add NFT
          </button>
        </div>
      </section>
    </section>
  );
}

export default MyCollections;
