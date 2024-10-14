import { useEffect, useState } from 'react';
import Eth from './Images/download (2).png';
import metamask from './Images/download (3).png';

import { FaCopy, FaArrowLeft } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom';

function Wallet({ walletOpen, setWalletOpen }) {
  const [balance, setBalance] = useState({});
  const [copied, setCopied] = useState(false);
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const Id = localStorage.getItem('Id');
  useEffect(() => {
    const fetchWallet = async () => {
      setLoading(true);
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      try {
        const res = await fetch(
          `https://artifynft.onrender.com/wallet/${Id}`,
          options,
        );
        const data = await res.json();
        console.log(data);
        setAddress(data.walletadd);

        fetchBalance(data.walletadd);
        if (data.walletadd) {
          setLoading(false);
        }
      } catch (error) {
        setErrorMessage(error);
        console.log(error);
      }
    };

    const fetchBalance = async (id) => {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      try {
        const res = await fetch(
          `https://artifynft.onrender.com/balance/${id}`,
          options,
        );
        const data = await res.json();
        console.log(data);
        setBalance(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWallet();
  }, []);
  console.log(address);
  const handleCopy = () => {
    navigator.clipboard
      .writeText(address)
      .then(() => {
        setCopied(true); // Show "Copied" text
        setTimeout(() => setCopied(false), 3000); // Hide it after 2 seconds
      })
      .catch((err) => console.error('Failed to copy text: ', err));
  };

  const back = () => {
    setWalletOpen(false);
  };
  return (
    <section className="md:top-20   top-0 h-screen md:h-fit z-20 dropdown md:right-24 pt-4 pb-10 fixed w-full md:w-83">
      <FaArrowLeft
        className="white md:hidden top-6 text-white absolute left-10"
        onClick={back}
      />
      <section className="h-12 flex justify-center gap-2 ul">
        <h1 className="text-white text-xl">Wallet</h1>
        <img src={metamask} className="h-6 w-6 mt-1  " />
      </section>

      <section className="grid place-items-center mt-14 md:mt-4">
        <h1 className="text-3xl text-white font-normal">
          <span className="text-3xl text-white font-medium">0</span> ETH
        </h1>
      </section>
      <div className=" mt-4 gap-2 place-items-center justify-center flex font-medium text-base   ">
        <p className="text-white">Address </p>
        <img src={Eth} className="h-4 w-4 rounded-full" />
      </div>
      <div className="gap-2 flex justify-center  mt-2 ">
        {' '}
        <section
          className="w-28 relative cursor-pointer overflow-hidden"
          onClick={handleCopy}
        >
          <p className=" text-sm text-nowrap text-gray-200">{address}</p>{' '}
        </section>
        <div className="mt-1 relative">
          {' '}
          <FaCopy
            className="text-white cursor-pointer text-xs"
            onClick={handleCopy}
          />
          {loading && <div className="spinner2 right-8  absolute"></div>}
          {copied && (
            <p className="text-green-500 text-xs absolute -top-5 text-nowrap font-medium">
              Copied !
            </p>
          )}
        </div>
      </div>
      <div className="mt-10 grid place-items-center">
        {' '}
        <p className="text-white  w-90% text-base font-normal">
          Withdrawal network
        </p>
        <div className="color-div mb-6 w-90% rounded-md pl-4 mt-2  form py-3 text-white outline-none ">
          <p className="text-sm font-normal">ETH (Ethereum)</p>
        </div>
        <form className="w-full relative  grid place-items-center">
          <p className="text-white w-90% text-base font-normal">
            Withdrawal Address
          </p>{' '}
          <input
            className=" mt-2 placeholder:text-sm placeholder:font-normal pl-4 placeholder:text-white color-div w-90% rounded-md form py-3 text-white outline-none "
            type="text"
            placeholder="Enter Withdrawal address"
          />
          <p className="text-white mt-6  w-90% text-base font-normal">
            Withdrawal amount
          </p>
          <p className="text-white   right-10 top-36 mt-1.5  absolute text-base font-normal">
            ETH
          </p>
          <input
            className="color-div placeholder:text-sm placeholder:font-normal pl-4 placeholder:text-white w-90% rounded-md mt-2 form py-3 text-white outline-none "
            type="text"
            placeholder="Amount"
          />
          <button className="py-2.5  bg-black text-base md:mt-8 mt-10 rounded-md   text-white px-10">
            Withdraw
          </button>
        </form>
      </div>
    </section>
  );
}
export default Wallet;
