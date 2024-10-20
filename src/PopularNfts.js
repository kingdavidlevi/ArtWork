import { useState } from 'react';
import { FaImage } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { FaTriangleExclamation } from 'react-icons/fa6';
import { useEffect } from 'react';

function PopularNfts() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // Should be a boolean, not a string
  const [latestsource, setLatestSource] = useState(null);

  // Set initial state to null
  const params = useParams();
  const [hasInsufficientFunds, setHasInsufficientFunds] = useState(false);
  const [textInsufficient, setInsufficient] = useState(
    'Insufficient funds, please fund your wallet',
  );

  const home = () => {
    navigate('/');
  };

  const truncateText = (str, maxLength) => {
    if (typeof str !== 'string') {
      return ''; // Return an empty string if str is not a valid string
    }
    return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
  };

  useEffect(() => {
    const fetchLatestCollection = async () => {
      setLoading(true);

      const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      };

      try {
        const response = await fetch(
          `https://artifynft.onrender.com/getPopNft/${params.id}`,
          options,
        );
        const data = await response.json();
        console.log(data);
        setLatestSource(data);
      } catch (error) {
        setErrorMessage(error.message); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchLatestCollection();
  }, [params.id]);
  const buyItem = () => {
    setHasInsufficientFunds(true);
    setTimeout(() => setHasInsufficientFunds(false), 8000);
  };
  const truncateinsufficientText = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + '' : str;
  };
  const truncateLongText = (str) => {
    return str.length > 37 ? str.substring(37) : ''; // Return substring from 38th character onwards
  };
  return (
    <section className="bg-black w-full pb-10 min-h-screen relative">
      <section className="slide-in">
        {hasInsufficientFunds && (
          <div className="  dropdown md:w-100 w-90% md:flex justify-center gap-3    rounded-md py-5  mt-24   ">
            <p className="text-white md:block hidden md:text-lg text-sm font-medium">
              {textInsufficient}{' '}
            </p>
            <p className="text-white md:hidden md:text-lg text-base font-medium">
              {truncateinsufficientText(textInsufficient, 37)}
            </p>
            <section className="flex gap-1 mt-2 justify-center md:hidden">
              <p className="text-white md:hidden md:text-lg text-base font-medium">
                {truncateLongText(textInsufficient)}
              </p>
              <div className="relative flex items-center">
                <FaTriangleExclamation className="text-lg  text-red-500 " />

                <span
                  className="absolute text-base text-white"
                  style={{
                    top: '60%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  !
                </span>
              </div>
            </section>
            <section className="hidden md:block">
              <div className="relative flex items-center">
                <FaTriangleExclamation className="text-lg md:mt-1 text-red-500 mt-0.5" />

                <span
                  className="absolute text-base text-white"
                  style={{
                    top: '60%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  !
                </span>
              </div>
            </section>
          </div>
        )}
      </section>
      <div
        className="absolute top-4 left-6 cursor-pointer h-8 w-8 rounded-full grid place-items-center z-20"
        onClick={home}
      >
        <FaArrowLeft className="text-white text-base md:text-lg" />
      </div>
      <div className="w-full">
        <div className="image-container relative w-full md:h-60 h-36">
          {/* Add a check for profilePic */}
          {latestsource && latestsource.profilePic ? (
            <img
              className="w-full object-cover md:h-60 h-40"
              src={latestsource.profilePic}
              style={{ backgroundImage: `url(${latestsource.profilePic})` }}
              alt="Profile"
            />
          ) : (
            <div className="bg-gray-800 w-full md:h-60 h-40"></div> // Fallback in case there's no image
          )}
        </div>
      </div>
      <div className="mt-6 md:mt-10">
        {latestsource && (
          <p className="text-white  ml-4 text-base md:text-lg font-semibold">
            Collection name:{' '}
            <span className="italic text-gray-300">
              {latestsource?.itemName}
            </span>
          </p>
        )}
        {latestsource && (
          <p className="text-white mt-2  ml-4  text-base md:text-lg font-semibold">
            Description:{' '}
            <span className="italic text-gray-300">
              {latestsource?.description}
            </span>
          </p>
        )}

        {latestsource?.nfts?.length > 0 ? (
          <section className="mt-4 grid place-items-center grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {latestsource.nfts.map((item, index) => (
              <div
                key={index}
                className="color-div mt-6 form px-3 duration-300 transition-transform ease-in-out transform hover:scale-103 w-40 md:w-56 lg:w-70 pt-3 rounded-lg shadow-md pb-4"
              >
                <section>
                  <img
                    src={item.nftImage}
                    className="md:h-48 h-28 w-full rounded-lg"
                    alt="NFT"
                  />
                </section>
                <div className="mt-4">
                  <section className="w-full   mt-4">
                    <p className="text-white italic md:text-base text-sm font-semibold">
                      {truncateText(item.itemName, 24)}
                    </p>
                  </section>
                  <section className="w-full flex items-center justify-between mt-4">
                    <p className="text-white text-base font-semibold">
                      Amount:
                    </p>
                    <p className="text-white text-base font-semibold">
                      <span className="mr-1">{item.price}</span>ETH
                    </p>
                  </section>
                  <button
                    className="w-full py-2 mt-3 rounded-md form btn text-base font-medium text-white"
                    onClick={buyItem}
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </section>
        ) : latestsource?.nfts?.length === 0 ? (
          <section className="mt-20 place-items-center">
            <div className="grid place-items-center">
              <p className="text-white text-xl font-medium">
                Empty Collection!
              </p>
            </div>
          </section>
        ) : (
          <section className="mt-20 place-items-center">
            {loading ? (
              <div className="loading-overlay">
                <div className="spinner"></div>
              </div>
            ) : (
              <div className="grid place-items-center">
                <p className="text-white  md:text-xl text-base font-medium">
                  Failed to load collection.
                </p>
                <p className="text-white  md:text-xl text-base font-medium">
                  check internet connection!
                </p>
              </div>
            )}
          </section>
        )}
      </div>
    </section>
  );
}

export default PopularNfts;
