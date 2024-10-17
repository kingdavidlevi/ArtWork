import Wallet from './Wallet';
import { useEffect, useState } from 'react';
import {
  FaArrowLeft,
  FaImage,
  FaTrash,
  FaWallet,
  FaArrowDown,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FaTriangleExclamation } from 'react-icons/fa6';

function UploadNft() {
  const navigate = useNavigate();
  const [walletOpen, setWalletOpen] = useState(false);
  const [uploadhover, setuploadHover] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    errorMsg: '',
    password: '',
    username: '',
  });
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [inputs, setInputs] = useState({
    nftName: '',
    amount: '',
    Description: '',
  });
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  const [hasInsufficientFunds, setHasInsufficientFunds] = useState(false);

  const params = useParams();

  const toggleWallet = () => {
    setWalletOpen((prev) => !prev);
  };

  const handleFormChanges = (e) => {
    const { name, value } = e.target;

    setInputs((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const back = () => {
    navigate('/');
  };

  const hover = () => {
    setuploadHover(true);
  };
  const hoverOut = () => {
    setuploadHover(false);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setFileName(file.name);
        // setImageFile(file);
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  // Handle file drop (via drag and drop)
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setFileName(file.name);
        // setImageFile(file);
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  // Prevent default behavior when dragging files over the drop area
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Function to handle file selection

  // Function to trigger file input when div is clicked
  const handleDivClick = () => {
    fileInputRef.current.click();
  };
  const handleDelete = () => {
    setImage(null);
    setFileName(''); // Clear the file name
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!image) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('price', inputs.amount);
    formData.append('itemName', inputs.nftName);
    formData.append('colId', params.id);

    const options = {
      method: 'POST',
      body: formData,
    };

    try {
      const response = await fetch(
        'https://artifynft.onrender.com/postMynft',
        options,
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setImage(null);
        setFileName(null);
        setLoading(false);
        setInputs({ nftName: '', amount: '' });
        navigate(`/MyNftCollections/${params.id}`);
      } else {
        setErrorMessage(data);
        setHasInsufficientFunds(true);
        //setTimeout(() => setHasInsufficientFunds(false), 8000);
      }
    } catch (error) {
      navigate('/UploadNft');
    }
    setLoading(false);
  };
  const truncateText = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + '' : str;
  };

  const truncateLongText = (str) => {
    return str.length > 37 ? str.substring(37) : ''; // Return substring from 38th character onwards
  };

  /* useEffect(() => {
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  });*/
  return (
    <section className="h-full pb-20 App bg-black">
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <section className="slide-in">
        {hasInsufficientFunds && (
          <div className="  dropdown md:w-100 w-80% md:flex justify-center gap-3    rounded-md py-5  mt-24   ">
            <p className="text-white md:block hidden md:text-lg text-sm font-medium">
              {errorMessage.errorMsg}{' '}
            </p>
            <p className="text-white md:hidden md:text-lg text-base font-medium">
              {truncateText(errorMessage.errorMsg, 37)}
            </p>
            <section className="flex gap-1 mt-2 justify-center md:hidden">
              <p className="text-white md:hidden md:text-lg text-base font-medium">
                {truncateLongText(errorMessage.errorMsg)}
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
      <div className={`main-content ${loading ? 'blurred' : ''}`}>
        <header className="glass-header2 w-full px-2 md:px-6 bg-black justify-between z-40 h-18 flex items-center">
          <div className="flex gap-3">
            <div
              className=" cursor-pointer h-8 w-8 rounded-full grid  dropdown-li place-items-center z-20"
              onClick={back}
            >
              <FaArrowLeft className="text-white text-base md:text-lg  " />
            </div>
          </div>
          <div onClick={toggleWallet} className="">
            <FaWallet className="text-white ml-3 text-base md:text-lg absolute font mt-3" />
            <button className="pr-4 pl-10 text-white btn py-2  md:py-2  md:text-base text-base px-4 font-normal md:font-medium rounded-lg">
              Wallet
            </button>
          </div>
        </header>
        <section className="grid pt-24    place-items-center">
          <div className="w-90%">
            <p className="text-xl md:text-2xl  text-white font-medium">
              Create an NFT
            </p>
          </div>
        </section>
        <form
          className="grid mt-4 lg:flex lg:w-full lg:px-20 lg:justify-between  lg:gap-32 lg:place-items-start place-items-center"
          onSubmit={handlesubmit}
        >
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={handleDivClick} // Added onClick event here
            className={`${
              uploadhover && image
                ? 'rounded-xl   upp relative lg:w-full lg:h-100 mt-10 cover-photohover sm:h-72 h-56 md:h-64 w-80%  sm:w-90   '
                : 'rounded-xl     upp relative  lg:w-full  lg:h-100 mt-10  cover-photo h-56 sm:h-72 md:h-64 w-80%  sm:w-90   '
            }`}
            onMouseOver={hover}
            onMouseOut={hoverOut}
            style={{ cursor: 'pointer' }} // Make the div clickable
          >
            {' '}
            {image && (
              <section
                className="absolute z-10 top-4 right-3     md:top-6 md:right-8"
                onClick={handleDelete}
              >
                <FaTrash className="text-white text-lg" />
              </section>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef} // Ref for input
              style={{ display: 'none' }} // Hide the input
            />
            <section>
              {image ? (
                <img
                  src={image}
                  className="  rounded-xl     sm:h-72 lg:w-full lg:h-100  w-full  md:w-90 h-56 md:h-64   "
                  alt="uploaded"
                />
              ) : (
                <section className="z-20 lg:w-full  lg:h-150 lg:grid lg:place-items-center rounded-xl sm:h-72  w-full md:w-90 h-56 md:h-64 grid place-items-center">
                  <div className="grid place-items-center">
                    <FaArrowDown className="text-white text-lg" />
                    <div className="w-5 h-1 bg-white"></div>
                    <p className="text-lg text-white mt-5 font-medium">
                      Drag and drop media
                    </p>
                    <p className="text-blue-600 text-base font-medium">
                      Browse files
                    </p>
                    <p className="text-gray-400 font-medium">Max size: 50MB</p>
                    <p className="text-gray-400 font-medium">
                      JPG, PNG, GIF, SVG, MP4
                    </p>
                  </div>
                </section>
              )}
            </section>
          </div>

          <div className="w-90% relative">
            <section className=" mt-4">
              {' '}
              <p className="text-white mt-10 text-base font-normal md:text-xl md:font-semibold">
                Item Name *
              </p>
            </section>
            <input
              name="nftName"
              onChange={handleFormChanges}
              value={inputs.nftName}
              placeholder="Name your NFT"
              type="text"
              className="px-3 w-full  mt-4 collection-name outline-none placeholder:text-base text-white py-3 rounded-md bg-black"
            />
            <section className="w-full mt-6">
              {' '}
              <p className="text-white   text-base font-normal md:text-xl md:font-semibold">
                Amount *
              </p>
            </section>
            <input
              min="0"
              name="amount"
              onChange={handleFormChanges}
              value={inputs.amount}
              placeholder="Amount"
              type="number"
              className="px-3 w-full  no-spinner mt-4 collection-name outline-none placeholder:text-base text-white py-3 rounded-md bg-black"
            />
            <p className="text-white right-8 top-52 mt-1  absolute text-base font-normal  md:text-lg">
              ETH
            </p>
            <section className="w-full lg:place-items-start grid place-items-center">
              {inputs.amount.length > 0 &&
              inputs.nftName.length > 0 &&
              image ? (
                <button className="bg-blue-600 text-white font-medium text-base md:px-14  px-10 mb-14 mt-8 py-3 rounded-md">
                  Continue
                </button>
              ) : (
                <button className="bg-blue-600 text-white font-medium text-base md:px-14  px-10 mb-14 mt-8 py-3 rounded-md">
                  Continue
                </button>
              )}
            </section>
          </div>
        </form>

        {walletOpen && (
          <Wallet walletOpen={walletOpen} setWalletOpen={setWalletOpen} />
        )}
      </div>
    </section>
  );
}
export default UploadNft;
