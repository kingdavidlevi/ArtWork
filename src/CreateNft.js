import ImageSlider from './ImageSlider';
import { useEffect, useState } from 'react';
import { FaImage } from 'react-icons/fa';
import { NavLink, useNavigate, useOutletContext } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import testing from './Images/download (2).png';

function CreateNft() {
  const navigate = useNavigate();
  const [nftName, setNftName] = useState('Christopher Art Collections9999');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const Id = localStorage.getItem('Id');
  const [cols, setCols] = useState([]);
  const { user, setUser } = useOutletContext();

  const images = [
    require('./Images/pexels-steve-1572386.jpg'),
    require('./Images/pexels-heftiba-1194420.jpg'),
    require('./Images/pexels-mccutcheon-1209843.jpg'),
  ];
  console.log(user.admin);

  useEffect(() => {
    const getCollections = async () => {
      setLoading(true);
      const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      };

      try {
        const response = await fetch(
          `https://artifynft.onrender.com/myCols/${Id}`,
          options,
        );
        const data = await response.json();
        console.log(data);
        if (data) {
          setCols(data);
          setLoading(false);
        }
      } catch (error) {
        setErrorMessage(error);
      }
    };
    getCollections();
  }, []);
  const home = () => {
    navigate('/');
  };
  const routoNftCollections = (id) => {
    navigate(`/MyNftCollections/${id}`);
  };
  const create = () => {
    navigate('/AdminCreateCollection');
  };
  const truncateText = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
  };
  return (
    <section className=" App bg-black w-full pb-10 lg:flex  lg:h-full xl:h-full  lg-pb-0 min-h-screen  relative ">
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
        <NavLink
          to={`${user.admin ? '/AdminCreateCollection' : '/CreateCollection'}`}
        >
          <div className="  lg:block  hidden cursor-pointer">
            <p className="text-white md:text-4xl text-3xl font-semibold">
              Create
            </p>
          </div>
        </NavLink>
        <section className="btn mt-14 grid md:w-80% place-items-center myDiv cursor-pointer pr-5 pl-4 py-6 z-40 rounded-md w-90%">
          <NavLink
            to={`${
              user.admin && user.admin !== undefined
                ? '/AdminCreateCollection'
                : '/CreateCollection'
            }`}
          >
            <div onClick={create}>
              <div className="flex w-90%  gap-3">
                <FaImage className="text-white text-xl" />
                <p className="text-white font-bold text-base">
                  Collection or item
                </p>
              </div>
              <section className="w-90% flex justify-between mt-6">
                <div className="w-80%">
                  <p className="text-white  font-medium text-base">
                    Create a new NFT collection or add an NFT to an existing
                    one. Your items will be displayed immediately. List for sale
                    when you're ready.
                  </p>
                </div>
                <FaArrowRight className="text-white text-xl" />
              </section>
            </div>
          </NavLink>
        </section>

        <section className="lg:h-68 lg:pt-2 grid place-items-center lg:place-items-start  lg:mt-14 w-full text-area h-full   lg:overflow-y-scroll lg:overflow-hidden">
          {cols && cols?.length > 0 ? (
            cols.map((items) => (
              <div
                className="btn relative mt-4 flex md:w-80% place-items-center w-90% myDiv cursor-pointer pr-5 pl-4 py-6 z-40 rounded-md "
                onClick={() => routoNftCollections(items._id)}
              >
                <img
                  src={items.profilePic}
                  className="md:h-28 rounded-md h-22 w-22 md:w-28"
                />
                <section className="absolute right-10 top-3">
                  {' '}
                  <FaArrowRight className="text-white text-xl" />
                </section>
                <div className="ml-4">
                  <p className="text-white text-lg font-medium">
                    Collection Name :
                  </p>
                  <p className="text-gray-400 md:hidden italic md:text-lg text-base font-medium">
                    {truncateText(items.itemName, 25)}
                  </p>
                  <p className="text-gray-400 md:block hidden italic md:text-lg text-base font-medium">
                    {items.itemName}
                  </p>
                </div>
              </div>
            ))
          ) : cols.length === 0 ? (
            <p className="text-white mt-4 md:text-lg  text-base font-medium">
              {' '}
              No Collection!
            </p>
          ) : loading ? (
            <div className="loading-overlay">
              <div className="spinner"></div>
            </div>
          ) : (
            <p></p>
          )}
        </section>
      </section>
      <div className="w-full   hidden lg:block ">
        {' '}
        <ImageSlider images={images} />
      </div>
    </section>
  );
}

export default CreateNft;
