import { useEffect, useState, useRef } from 'react';
import { FaArrowLeft, FaImage, FaTrash, FaWallet } from 'react-icons/fa';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Wallet from './Wallet';
import deletebtn from './Images/Vector (8).png';

function AdminCreateCollection() {
  const { latestCollection, setLatestCollection } = useOutletContext();
  const [walletOpen, setWalletOpen] = useState(false);
  const [uploadhover, setuploadHover] = useState(false);
  const [image, setImage] = useState(null); // Updated state to lowercase 'image'
  const [imageFile, setImageFile] = useState(null); // State for actual file object
  const [fileName, setFileName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState('');
  const [inputs, setInputs] = useState({
    collectionName: '',
    artistName: '',
    description: '',
  });
  const fileInputRef = useRef(null);

  const handleFormChanges = (e) => {
    const { name, value } = e.target;
    setInputs((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const toggleWallet = () => {
    setWalletOpen((prev) => !prev);
  };

  const back = () => {
    navigate('/CreateNft');
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
        setImage(reader.result); // Base64 encoded image for display
        setFileName(file.name); // Store the file name
      };
      reader.readAsDataURL(file);
      setImageFile(file); // Store the actual file object for uploading
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); // Base64 encoded image for display
        setFileName(file.name); // Store the file name
      };
      reader.readAsDataURL(file);
      setImageFile(file); // Store the actual file object for uploading
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) return; // Ensure there's an image file for submission

    const formData = new FormData();
    formData.append('image', imageFile); // Send the actual file object
    formData.append('colName', inputs.collectionName);
    formData.append('artist', inputs.artistName);
    formData.append('description', inputs.description);

    const options = {
      method: 'POST',
      body: formData,
    };

    try {
      const response = await fetch(
        'http://localhost:3500/postLatestCol',
        options,
      );
      const data = await response.json();
      setLatestCollection(data);
    } catch (error) {
      setErrorMessage(error);
    }

    setLoading(true);
  };

  const handleDivClick = () => {
    fileInputRef.current.click(); // Trigger file input click when div is clicked
  };

  const handleDelete = () => {
    setImage(null);
    setFileName(''); // Clear the file name
  };

  return (
    <section className="xl:h-full h-full bg-black ">
      <header className="glass-header2 w-full px-2 md:px-6 justify-between z-20 h-18 flex items-center">
        <div className="flex gap-3">
          <div
            className="cursor-pointer h-8 w-8 rounded-full grid dropdown-li place-items-center z-20"
            onClick={back}
          >
            <FaArrowLeft className="text-white text-base md:text-lg" />
          </div>
          <p className="text-lg text-white font-semibold">Create an NFT</p>
        </div>
        <div onClick={toggleWallet}>
          <FaWallet className="text-white ml-3 text-base md:text-lg absolute font mt-3" />
          <button className="pr-4 pl-10 text-white btn py-2 md:py-2 md:text-base text-base px-4 font-normal md:font-medium rounded-lg">
            Wallet
          </button>
        </div>
      </header>
      <form>
        <section className="grid place-items-center md:pt-36 pt-28">
          <div className="md:w-260 w-90%">
            <p className="text-white text-base md:text-2xl font-medium">
              First, you'll need to create a collection for your NFT.
            </p>
            <section className="mt-2">
              <p className="text-white text-base md:text-2xl font-medium">
                N/b: Minting of each artwork costs 0.2ETH
              </p>
              <p className="text-white mt-10 text-base font-normal md:text-xl">
                Logo image
              </p>
              <div>
                {image ? (
                  <div
                    className={`${
                      uploadhover
                        ? 'rounded-xl py-6 relative px-6 md:px-8 md:py-8 mt-6 cover-photohover flex gap-4 md:gap-8'
                        : 'rounded-xl px-6 py-6 relative md:px-8 md:py-8 mt-6 cover-photo flex gap-4 md:gap-8'
                    }`}
                    onMouseOver={hover}
                    onMouseOut={hoverOut}
                    style={{ cursor: 'pointer' }}
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
                      ref={fileInputRef}
                      style={{ display: 'none' }}
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
                        <p className="text-white text-wrap mt-2 text-base font-semibold">
                          {fileName}
                        </p>
                      </section>
                    ) : (
                      <section>
                        <p className="text-white font-semibold text-base md:text-lg">
                          Drag and drop or click to upload
                        </p>
                        <p className="md:text-base text-sm font-normal mt-2 text-gray-400">
                          You may change this after uploading.
                        </p>
                        <p className="md:text-base text-sm mt-1 font-normal text-gray-400">
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
                    onClick={handleDivClick}
                    className={`${
                      uploadhover
                        ? 'rounded-xl py-6 relative px-6 md:px-8 md:py-8 mt-6 cover-photohover flex gap-4 md:gap-8'
                        : 'rounded-xl px-6 py-6 relative md:px-8 md:py-8 mt-6 cover-photo flex gap-4 md:gap-8'
                    }`}
                    onMouseOver={hover}
                    onMouseOut={hoverOut}
                    style={{ cursor: 'pointer' }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                    />
                    <div
                      className={`${
                        uploadhover
                          ? 'w-28 h-28 min-w-28 grid place-items-center cover-photohover rounded-xl'
                          : 'w-28 h-28 min-w-28 grid place-items-center cover-photo rounded-xl'
                      }`}
                    >
                      <FaImage className="text-white text-xl" />
                    </div>
                    <section>
                      <p className="text-white font-semibold text-base md:text-lg">
                        Drag and drop or click to upload
                      </p>
                      <p className="md:text-base text-sm font-normal mt-2 text-gray-400">
                        You may change this after uploading.
                      </p>
                      <p className="md:text-base text-sm mt-1 font-normal text-gray-400">
                        Recommended size: 350 x 350. File types: JPG, PNG, SVG,
                        or GIF
                      </p>
                    </section>
                  </div>
                )}
              </div>
            </section>
          </div>
        </section>
        {/* Rest of the form fields and submission */}
        {/* Form submission button */}
        <button onClick={handlesubmit} className="submit-button mt-6">
          Submit
        </button>
      </form>
      {walletOpen && <Wallet />}
    </section>
  );
}

export default AdminCreateCollection;
