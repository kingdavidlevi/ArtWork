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

function UploadNft() {
  const navigate = useNavigate();
  const [walletOpen, setWalletOpen] = useState(false);
  const [uploadhover, setuploadHover] = useState(false);
  const [inputs, setInputs] = useState({
    nftName: '',
    amount: '',
    Description: '',
  });
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  const toggleWallet = () => {
    setWalletOpen((prev) => !prev);
  };

  const handleFormChanges = (e) => {
    const { name, value } = e.target;

    setInputs((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
    console.log(inputs);
  };

  const back = () => {
    navigate('/CreateCollection');
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

  return (
    <section className="h-full pb-20 bg-black">
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
      <section className="grid pt-24  place-items-center">
        <div className="w-90%">
          <p className="text-xl text-white font-medium">Create an NFT</p>
        </div>

        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleDivClick} // Added onClick event here
          className={`${
            uploadhover
              ? 'rounded-xl  upp relative   mt-10 cover-photohover sm:h-72 h-56 md:h-64 w-80%  md:w-90   '
              : 'rounded-xl  upp relative  mt-10  cover-photo h-56 sm:h-72 md:h-64 w-80%  md:w-90   '
          }`}
          onMouseOver={hover}
          onMouseOut={hoverOut}
          style={{ cursor: 'pointer' }} // Make the div clickable
        >
          <section
            className="absolute z-40 top-4 right-3  md:top-6 md:right-8"
            onClick={handleDelete}
          >
            {image && <FaTrash className="text-white" />}
          </section>
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
                className="  rounded-xl sm:h-72   w-full  md:w-90 h-56 md:h-64       "
                alt="uploaded"
              />
            ) : (
              <section className="z-20  rounded-xl sm:h-72  w-full md:w-90 h-56 md:h-64 grid place-items-center">
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
        <section className="w-90% mt-4">
          {' '}
          <p className="text-white mt-10 text-base font-normal md:text-xl md:font-semibold">
            Name *
          </p>
        </section>
        <input
          name="nftName"
          onChange={handleFormChanges}
          value={inputs.nftName}
          placeholder="Name your NFT"
          type="text"
          className="px-3 w-90% mt-4 collection-name outline-none placeholder:text-base text-white py-3 rounded-md bg-black"
        />
        <section className="w-90% mt-4">
          {' '}
          <p className="text-white mt-10 text-base font-normal md:text-xl md:font-semibold">
            Amount *
          </p>
        </section>
        <input
          name="amount"
          onChange={handleFormChanges}
          value={inputs.amount}
          placeholder="Name your NFT"
          type="text"
          className="px-3 w-90% mt-4 collection-name outline-none placeholder:text-base text-white py-3 rounded-md bg-black"
        />
        <section className="w-90% mt-4">
          {' '}
          <p className="text-white mt-10 text-base font-normal md:text-xl md:font-semibold">
            Description
          </p>
        </section>
        <textarea
          name="Description"
          onChange={handleFormChanges}
          value={inputs.Description}
          placeholder=""
          type="text"
          className="px-3 max-h-40 h-40 w-90% mt-4 collection-name outline-none placeholder:text-base text-white py-3 rounded-md bg-black"
        />
        <button className="bg-blue-600 text-white font-medium text-base md:px-14  px-10 mb-14 mt-8 py-3 rounded-md">
          Create
        </button>
      </section>

      {walletOpen && (
        <Wallet walletOpen={walletOpen} setWalletOpen={setWalletOpen} />
      )}
    </section>
  );
}
export default UploadNft;
