import { useState } from 'react';
import { FaImage } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import image1 from './Images/587a05c52581818aff54365e2025bb19.jpg';
import image2 from './Images/5e78aed4f319d80d1359d37e339bc1b0.jpg';
import image3 from './Images/be842cbfe79630ac351b546f0c17643f.jpg';
import image4 from './Images/c884b357257314ae0d161084eff8bfd0.jpg';
import image5 from './Images/f9993c3602994dfba596aa74f67b8367.jpg';
import image6 from './Images/images (10).jpeg';
import image7 from './Images/images (11).jpeg';
import image8 from './Images/images (12).jpeg';
import image9 from './Images/images (13).jpeg';
import image10 from './Images/images (15).jpeg';
import image11 from './Images/images (16).jpeg';
import image12 from './Images/images (17).jpeg';
import { useEffect } from 'react';
import GeneralNftsImageSlider from './GeneralNftsImagesSlider';

function GeneralNfts() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState('');
  const [latestsource, setLatestSource] = useState({});
  const [text, setText] = useState('pp');
  const params = useParams();
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
  const routetoUploadNft = () => {
    navigate('/UploadNft');
  };
  const truncateText = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
  };
  useEffect(() => {
    const fetchLatestCollection = async () => {
      setLoading(true); // Start loading before the request

      const options = {
        method: 'GET', // 'Get' should be 'GET'
        headers: {
          'content-type': 'application/json',
        },
      };

      try {
        const response = await fetch(
          `https://artifynft.onrender.com/latestNfts/${params.id}`,
          options,
        );
        const data = await response.json();
        console.log(data);
        setLatestSource(data); // Assuming setLatestCollection is a state setter function
      } catch (error) {
        setErrorMessage(error); // Assuming setErrorMessage is a state setter for errors
      } finally {
        setLoading(false); // Stop loading after the request completes
      }
    };

    fetchLatestCollection();
  }, []);
  return (
    <section className=" bg-black w-full pb-10    lg-pb-0 min-h-screen  relative ">
      <div
        className="absolute top-4 left-6 cursor-pointer h-8 w-8 rounded-full grid  dropdown-li place-items-center z-20"
        onClick={home}
      >
        <FaArrowLeft className="text-white text-base md:text-lg  " />
      </div>
      <div className="w-full  ">
        <div className="image-container  relative   w-full  md:h-60   h-36  ">
          <img
            className="w-full md:object-cover  md:h-60   h-40 "
            src={latestsource.profilePic}
            style={{ backgroundImage: `url(${latestsource.profilePic})` }} // Use backgroundImage to cover the container
          />
        </div>
      </div>
      <div className=" mt-6 md:mt-10">
        <p className="text-white md:ml-10 ml-4 md:text-xl text-lg font-semibold">
          Collection name :{' '}
          <span className="italic text-2xl text-gray-300">
            {latestsource.itemName}
          </span>
        </p>
        {latestsource?.nfts?.length > 0 ? (
          <section className="mt-10 grid place-items-center grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4  ">
            {latestsource?.nfts?.map((item) => (
              <div className="color-div mt-6 form px-3   duration-300 transition-transform ease-in-out transform  hover:scale-103  w-40 min-w-40 md:min-w-56 md:w-56  lg:w-70 lg:min-w-70  pt-3 rounded-lg shadow-md  pb-4">
                <section>
                  {' '}
                  <img
                    src={item.nftImage}
                    className="md:h-48 h-28 w-full rounded-lg     md:w-70  "
                  />{' '}
                </section>
                <div className=" mt-4 ">
                  <section className="w-full grid place-items-center mt-4">
                    <p className="text-gray-400 md:hidden italic md:text-base text-sm font-semibold">
                      {truncateText(item.itemName, 16)}
                    </p>
                    <p className="text-gray-400 hidden md:block italic md:text-base text-sm font-semibold">
                      {truncateText(item.itemName, 24)}
                    </p>
                  </section>
                  <section className="w-full flex items-center justify-between mt-4">
                    <p className="text-white   text-base font-semibold">
                      Amount :
                    </p>
                    <p className="text-white  text-base  font-semibold">
                      <span>0.2</span>ETH
                    </p>
                  </section>
                  <button className="w-full py-2 mt-3 rounded-md form btn text-base font-medium  text-white">
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </section>
        ) : latestsource?.nfts?.length === 0 ? (
          <section className=" mt-20 place-items-center">
            <div className="grid place-items-center">
              <p className="text-white text-xl font-medium">
                Empty Collection!
              </p>
            </div>
          </section>
        ) : (
          <section className=" mt-20 place-items-center">
            <div className="loading-overlay">
              <div className="spinner"></div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

export default GeneralNfts;
