import Wallet from './Wallet';
import { useState } from 'react';
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
//`https://artifynft.onrender.com/postNft`
function UploadNft() {
  const navigate = useNavigate();
  const [walletOpen, setWalletOpen] = useState(false);
  const [uploadhover, setuploadHover] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState([]);
  const [inputs, setInputs] = useState({
    nftName: '',
    amount: '',
    Description: '',
  });
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);
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
        setImageFile(file);
      };
      reader.readAsDataURL(file);
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
        setImageFile(file);
      };
      reader.readAsDataURL(file);
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
      const response = await fetch(`http://localhost:3500`, options);
      const data = await response.json();
      console.log(data);
      if (data) {
        setImage(null);
        setFileName('');
        setLoading(false);
        setInputs({ nftName: '', amount: '' });
      }
    } catch (error) {
      setErrorMessage(error);
    }
  };
  return (
    <section className="h-full pb-20 App bg-black">
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className={`main-content ${loading ? 'blurred' : ''}`}>
        <header className="glass-header2 w-full px-2 md:px-6  justify-between z-30 h-18 flex items-center">
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
        <section className="grid pt-24 md:pt-28 lg:pt-40 place-items-center">
          <div className="w-90%">
            <p className="text-xl md:text-2xl  text-white font-medium">
              Create an NFT
            </p>
          </div>
        </section>
        <form className="grid mt-4 lg:flex lg:w-full lg:px-20 lg:justify-between  lg:gap-32 lg:place-items-start place-items-center">
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
                <button
                  className="bg-blue-600 text-white font-medium text-base md:px-14  px-10 mb-14 mt-8 py-3 rounded-md"
                  onClick={handlesubmit}
                >
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
