import { useState } from 'react';
import { useEffect } from 'react';
import { FaImage } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import image1 from './Images/587a05c52581818aff54365e2025bb19.jpg';
import { useParams } from 'react-router-dom';
import CollectionImageSlider from './CollectionImageSlider';

function MyNftCollections() {
  const navigate = useNavigate();
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [text, setText] = useState('Adams Christopher99 uoisjdjdj');

  const params = useParams();
  console.log(params);
  const images = [
    require('./Images/pexels-steve-1572386.jpg'),
    require('./Images/pexels-heftiba-1194420.jpg'),
    require('./Images/pexels-mccutcheon-1209843.jpg'),
  ];
  useEffect(() => {
    const getNfts = async () => {
      setLoading(true);
      const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      };
      try {
        const response = await fetch(
          `https://artifynft.onrender.com/myNfts/${params.id}`,
          options,
        );
        const data = await response.json();
        console.log(data);
        if (data) {
          setNfts(data);
        }
      } catch (error) {
        setErrorMessage(error);
        console.log(error);
      }
    };
    getNfts();
  }, []);
  const home = () => {
    navigate(-1);
  };
  const create = () => {
    navigate('/AdminCreateCollection');
  };
  const routetoUploadNft = () => {
    navigate('/UploadNft');
  };
  const truncateText = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
  };

  /*<section className="h-80 hidden grid place-items-center">
  <div className="grid place-items-center">
    <p className="text-white text-xl font-medium">
      You have no NFT in your collection
    </p>
    <button
      className="bg-blue-600 text-white mt-6 px-8 py-2 rounded-md"
      onClick={routetoUploadNft}
    >
      Add NFT
    </button>
  </div>
</section>*/

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
        <CollectionImageSlider />
      </div>

      <div className="color-div mt-6 form px-3   duration-300 transition-transform ease-in-out transform  hover:scale-103    w-40 min-w-40 md:min-w-56 md:w-56  lg:w-70 lg:min-w-70  pt-3 rounded-lg shadow-md  pb-4">
        <section>
          {' '}
          <img
            src={image1}
            className="md:h-48 h-28 w-full rounded-lg     md:w-70  "
          />{' '}
        </section>
        <div className=" mt-4">
          <section className="w-full grid place-items-center mt-4">
            <p className="text-gray-400 md:hidden italic md:text-base text-sm font-semibold">
              {truncateText(text, 16)}
            </p>
            <p className="text-gray-400 hidden md:block italic md:text-base text-sm font-semibold">
              {truncateText(text, 24)}
            </p>
          </section>
          <section className="w-full flex items-center justify-between mt-4">
            <p className="text-white   text-base font-semibold">Amount :</p>
            <p className="text-white  text-base  font-semibold">
              <span>0.2</span>ETH
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default MyNftCollections;
