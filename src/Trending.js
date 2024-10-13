import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Trending() {
  const [nftName, setNftName] = useState('Christopher Art Collections9999');
  const [text, setText] = useState('Adams Christopher99');
  const [latestsource, setLatestSource] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const [skeletonCount, setSkeletonCount] = useState(10);
  const navigate = useNavigate();
  const truncateText = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
  };

  const viewCollections = (id) => {
    navigate('/Login');
  };

  useEffect(() => {
    const fetchLatestCollection = async () => {
      const options = {
        method: 'GET', // 'Get' should be 'GET'
        headers: {
          'content-type': 'application/json',
        },
      };

      try {
        const response = await fetch(
          `https://artifynft.onrender.com/trending`,
          options,
        );
        const data = await response.json();

        const reorderedData = [data[data.length - 1], ...data.slice(0, -1)];
        setLatestSource(reorderedData); // Assuming setLatestCollection is a state setter function
        if (data) {
          setLoading(false);
        }
      } catch (error) {
        setErrorMessage(error); // Assuming setErrorMessage is a state setter for errors
      }
    };

    fetchLatestCollection();
  }, []);
  // Empty dependency array to run this effect only once on component mount
  const placeholderSkeleton = (index) => [
    <div
      key={index}
      className="color-div form px-3 hover:cursor-pointer duration-300 transition-transform ease-in-out transform hover:scale-103 w-56 min-w-56 md:w-70 md:min-w-70 pt-3 rounded-lg shadow-md pb-4"
    >
      <section className="md:h-48 h-40 w-full form rounded-lg"></section>
      <div className="mt-4">
        <p className="text-white   text-base font-medium italic md:font-semibold">
          CollectionName:
        </p>
        <p className="text-white md:hidden text-base font-medium italic md:font-semibold"></p>
        <section className="w-full flex items-center justify-between mt-4">
          <p className="text-white text-base font-semibold">Artist :</p>
          <p className="text-gray-400 italic md:text-base text-sm font-semibold"></p>
        </section>
        <section className="w-full flex items-center justify-between mt-4">
          <p className="text-white text-base font-semibold">Items :</p>
        </section>
        <section className="w-full flex justify-between mt-4">
          <p className="text-white text-base font-semibold">Total:</p>
        </section>
      </div>
      <button className="w-full py-2 mt-3 rounded-md form btn text-base font-medium text-white">
        Buy
      </button>
    </div>,
  ];

  return (
    <section className="lg:flex scroll-container overflow-hidden  flex overflow-x-scroll place-items-center mt-8 w-90% md:w-full pb-4 gap-4 md:gap-6">
      {loading ? (
        // Render the skeletons while loading
        Array.from({ length: skeletonCount }).map((_, index) =>
          placeholderSkeleton(index),
        )
      ) : latestsource.length > 0 ? (
        latestsource?.map((item, index) => (
          <div
            key={index}
            className="color-div form px-3 hover:cursor-pointer duration-300 transition-transform ease-in-out transform hover:scale-103 w-56 min-w-56 md:w-70 md:min-w-70 pt-3 rounded-lg shadow-md pb-4"
          >
            <section className="md:h-48 h-40 w-full rounded-lg">
              <img
                src={item.profilePic}
                className="h-full w-full rounded-lg"
                alt={item.profilePic}
              />
            </section>
            <div className="mt-4">
              <p className="text-white md:block hidden text-base font-medium italic md:font-semibold">
                {truncateText(item.itemName, 28)}
              </p>
              <p className="text-white md:hidden text-base font-medium italic md:font-semibold">
                {truncateText(item.itemName, 25)}
              </p>
              <section className="w-full flex items-center justify-between mt-4">
                <p className="text-white text-base font-semibold">Artist :</p>
                <p className="text-gray-400 italic md:text-base text-sm font-semibold">
                  {truncateText(item.artiste, 18)}
                </p>
              </section>
              <section className="w-full flex items-center justify-between mt-4">
                <p className="text-white text-base font-semibold">Items :</p>
                <p className="text-white text-base font-semibold">4</p>
              </section>
              <section className="w-full flex justify-between mt-4">
                <p className="text-white text-base font-semibold">Total:</p>
                <p className="text-white text-base font-semibold">
                  <span>20</span> ETH
                </p>
              </section>
            </div>
            <button
              className="w-full py-2 mt-3 rounded-md form btn text-base font-medium text-white"
              onClick={viewCollections}
            >
              Buy
            </button>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </section>
  );
}
export default Trending;
