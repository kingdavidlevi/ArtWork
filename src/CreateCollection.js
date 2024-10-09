import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Wallet from './Wallet';
import { FaWallet } from 'react-icons/fa';
function CreateCollection() {
  const [walletOpen, setWalletOpen] = useState(false);
  const navigate = useNavigate();
  const toggleWallet = () => {
    setWalletOpen((prev) => !prev);
  };

  const back = () => {
    navigate();
  };
  return (
    <section className="h-screen bg-black ">
      <header className="glass-header2 w-full px-6  justify-between z-20 h-18 flex items-center">
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
      <section className="grid  md:pt-36 pt-28 place-items-center">
        <div className=" md:w-260">
          <p className="text-white text-lg md:text-2xl font-semibold">
            First, you'll need to create a collection for your NFT .
          </p>
          <section className="mt-2">
            <p className="text-white   text-xl md:text-2xl font-semibold">
              N/b : Minting of each artwork at costs 0.2ETH
            </p>
          </section>
        </div>
      </section>

      {walletOpen && (
        <Wallet walletOpen={walletOpen} setWalletOpen={setWalletOpen} />
      )}
    </section>
  );
}
export default CreateCollection;
