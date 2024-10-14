import { useState } from 'react';
import { FaArrowLeft, FaImage, FaTrash } from 'react-icons/fa';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useRef } from 'react';
import Wallet from './Wallet';
import deletebtn from './Images/Vector (8).png';
//

import { FaWallet } from 'react-icons/fa';
function CreateCollection() {
  const [walletOpen, setWalletOpen] = useState(false);
  const [uploadhover, setuploadHover] = useState(false);
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState('');
  const { user, setUser } = useOutletContext();
  const [inputs, setInputs] = useState({
    collectionName: '',
    description: '',
  });
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const Id = localStorage.getItem('Id');
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
    navigate('/CreateNft');
  };
  const routeToUpload = () => {
    navigate('/UploadNft');
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
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  // Prevent default behavior when dragging files over the drop area
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!image) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('colName', inputs.collectionName);
    formData.append('artiste', user.username);
    formData.append('description', inputs.description);
    formData.append('id', Id);

    const options = {
      method: 'POST',

      body: formData,
    };

    try {
      const response = await fetch(
        `https://artifynft.onrender.com/postCol`,
        options,
      );
      const data = await response.json();
      console.log(data);
      if (data) {
        navigate(`/UploadNft/${data._id}`);
      }
    } catch (error) {
      setErrorMessage(error);
      setLoading(false);
    }
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
    <section className="xl:h-full App  h-full  bg-black ">
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className={`main-content ${loading ? 'blurred' : ''}`}>
        <header className="glass-header2 w-full px-2 md:px-6  justify-between z-40 h-18 flex items-center">
          <div className="flex gap-3">
            <div
              className=" cursor-pointer h-8 w-8 rounded-full grid  dropdown-li place-items-center z-20"
              onClick={back}
            >
              <FaArrowLeft className="text-white text-base md:text-lg  " />
            </div>
            <p className="text-lg text-white font-semibold">
              Create a Collection{' '}
            </p>
          </div>
          <div onClick={toggleWallet} className="">
            <FaWallet className="text-white ml-3 text-base md:text-lg absolute font mt-3" />
            <button className="pr-4 pl-10 text-white btn py-2  md:py-2  md:text-base text-base px-4 font-normal md:font-medium rounded-lg">
              Wallet
            </button>
          </div>
        </header>
        <form>
          <section className="grid place-items-center md:pt-36 pt-28  ">
            <div className=" md:w-260   w-90%">
              <p className="text-white text-base md:text-2xl font-medium">
                First, you'll need to create a collection for your NFT .
              </p>
              <section className="mt-2">
                <p className="text-white  text-base md:text-2xl font-medium">
                  N/b : Minting of each artwork costs 0.2ETH
                </p>
                <p className="text-white  mt-10   text-base font-normal md:text-xl ">
                  Logo image
                </p>
                <div>
                  {image ? (
                    <div
                      // Added onClick event here
                      className={`${
                        uploadhover
                          ? 'rounded-xl py-6 relative px-6 md:px-8 md:py-8 mt-6 cover-photohover flex gap-4 md:gap-8'
                          : 'rounded-xl px-6 py-6 relative md:px-8 md:py-8 mt-6 cover-photo flex gap-4 md:gap-8'
                      }`}
                      onMouseOver={hover}
                      onMouseOut={hoverOut}
                      style={{ cursor: 'pointer' }} // Make the div clickable
                    >
                      <section
                        className="absolute z-20 md:top-6 right-6 top-4 md:right-8"
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

                      <div
                        className={`${
                          uploadhover
                            ? 'w-28 h-28 min-w-28 grid place-items-center cover-photohover rounded-xl'
                            : 'w-28 h-28 min-w-28 grid place-items-center cover-photo rounded-xl'
                        }`}
                      >
                        {image ? (
                          <img
                            src={image}
                            className="w-28 rounded-xl h-28 min-w-28"
                            alt="uploaded"
                          />
                        ) : (
                          <FaImage className="text-white text-xl" />
                        )}
                      </div>
                      {image && fileName ? (
                        <section className="grid md:max-w-60 max-w-48 w-48 md:w-60 overflow-hidden items-center">
                          {' '}
                          <p className="text-white text-wrap mt-2 text-sm font-normal">
                            {fileName}{' '}
                          </p>
                        </section>
                      ) : (
                        <section className=" ">
                          <p className="text-white font-semibold text-base md:text-lg">
                            Drag and drop or click to upload
                          </p>
                          <p className=" md:text-base text-sm font-normal mt-2 text-gray-400">
                            You may change this after uploading.
                          </p>
                          <p className=" md:text-base text-sm mt-1 font-normal text-gray-400">
                            Recommended size: 350 x 350. File types: JPG, PNG,
                            SVG, or GIF
                          </p>
                        </section>
                      )}
                    </div>
                  ) : (
                    <div
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onClick={handleDivClick} // Added onClick event here
                      className={`${
                        uploadhover
                          ? 'rounded-xl py-6 relative px-6 md:px-8 md:py-8 mt-6 cover-photohover   flex gap-4 md:gap-8'
                          : 'rounded-xl px-6 py-6 relative md:px-8 md:py-8 mt-6 cover-photo  flex gap-4 md:gap-8'
                      }`}
                      onMouseOver={hover}
                      onMouseOut={hoverOut}
                      style={{ cursor: 'pointer' }} // Make the div clickable
                    >
                      <section
                        className="absolute z-20 top-4  md:top-6 md:right-8"
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

                      <div
                        className={`${
                          uploadhover
                            ? 'w-28 h-28 min-w-28 grid place-items-center cover-photohover rounded-xl'
                            : 'w-28 h-28 min-w-28 grid place-items-center cover-photo rounded-xl'
                        }`}
                      >
                        {image ? (
                          <img
                            src={image}
                            className="w-28 rounded-xl h-28 min-w-28"
                            alt="uploaded"
                          />
                        ) : (
                          <FaImage className="text-white text-xl" />
                        )}
                      </div>
                      {image && fileName ? (
                        <section className="grid w-50% items-center">
                          {' '}
                          <p className="text-white mt-2 text-sm font-normal">
                            {fileName}{' '}
                          </p>
                        </section>
                      ) : (
                        <section className=" ">
                          <p className="text-white font-semibold text-base md:text-lg">
                            Drag and drop or click to upload
                          </p>
                          <p className="md:text-base text-sm font-normal mt-2 text-gray-400">
                            You may change this after uploading.
                          </p>
                          <p className=" md:text-base text-sm mt-1 font-normal text-gray-400">
                            Recommended size: 350 x 350. File types: JPG, PNG,
                            SVG, or GIF
                          </p>
                        </section>
                      )}
                    </div>
                  )}
                  <p className="text-white mt-10 text-base font-normal md:text-xl md:font-semibold">
                    Collection name
                  </p>
                  <input
                    name="collectionName"
                    onChange={handleFormChanges}
                    value={inputs.collectionName}
                    placeholder="My Collection Name"
                    type="text"
                    className="px-3 mt-4 collection-name outline-none placeholder:text-base w-full text-white py-3 rounded-md bg-black"
                  />

                  <p className="text-white mt-6 text-base font-normal md:text-xl md:font-semibold">
                    Description
                  </p>
                  <textarea
                    name="description"
                    onChange={handleFormChanges}
                    value={inputs.description}
                    placeholder="Description"
                    type="text"
                    className="px-3 mt-4 h-32 max-h-32 collection-name outline-none placeholder:text-base  w-full text-white py-3 rounded-md bg-black"
                  />
                </div>
              </section>
            </div>
            {inputs.collectionName.length > 0 &&
            inputs.description.length > 0 &&
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
        </form>
        {walletOpen && (
          <Wallet walletOpen={walletOpen} setWalletOpen={setWalletOpen} />
        )}
      </div>
    </section>
  );
}
export default CreateCollection;
