import Wallet from './Wallet';
import { FaWallet, FaArrowLeft } from 'react-icons/fa';
const back = () => {
  Navigate('CreateCollection');
};
function UploadNft() {
  const [inputs, setInputs] = useState({
    collectionName: '',
    Description: '',
  });

  const handleFormChanges = (e) => {
    const { name, value } = e.target;

    setInputs((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };
  return (
    <section>
      <header className="glass-header2 w-full px-2 md:px-6  justify-between z-20 h-18 flex items-center">
        <div className="flex gap-3">
          <div
            className=" cursor-pointer h-8 w-8 rounded-full grid  dropdown-li place-items-center z-20"
            onClick={back}
          >
            <FaArrowLeft className="text-white text-base md:text-lg  " />
          </div>
          <p className="text-lg text-white font-semibold">Create an NFT</p>
        </div>
        <div onClick={toggleWallet} className="">
          <FaWallet className="text-white ml-3 text-base md:text-lg absolute font mt-3" />
          <button className="pr-4 pl-10 text-white btn py-2  md:py-2  md:text-base text-base px-4 font-normal md:font-medium rounded-lg">
            Wallet
          </button>
        </div>
      </header>
      <section className="grid place-items-center"></section>
      {walletOpen && (
        <Wallet walletOpen={walletOpen} setWalletOpen={setWalletOpen} />
      )}
    </section>
  );
}
export default UploadNft;
