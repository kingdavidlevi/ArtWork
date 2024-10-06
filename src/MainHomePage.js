import MainCollection from './MainCollection';
import { useNavigate } from 'react-router-dom';
import AboutUs from './AboutUs';
import { FaCommentDots } from 'react-icons/fa6';
import { useOutletContext } from 'react-router-dom';
import UserChat from './UsersChat';
import { useState } from 'react';
function MainHomePage() {
  const { walletOpen, navigateExplore, setNavigateExplore, setWalletOpen } =
    useOutletContext();
  const [openchat, setOpenChat] = useState(false);
  const navigate = useNavigate();
  const toggleWallet = () => {
    setWalletOpen(false);
  };
  const Explore = () => {
    navigate('MainCollection');
    setNavigateExplore(true);
  };

  const chat = () => {
    setOpenChat(true);
  };
  const chatroute = () => {
    navigate('UserChat');
  };
  return (
    <section
      className={`${walletOpen || openchat ? ' md:relative fixed  ' : ' '}`}
      onClick={toggleWallet}
    >
      <section className="md:block md:mb-16 mb-10 md:place-items-start grid place-items-center">
        <div className="main grid  md:block place-items-center w-90% md:place-items-start  md:w-full pt-10 pb-10 md:pt-16 md:pb-16 md:pl-8  rounded-2xl ">
          <h1 className="text-white hidden md:block font-medium mb-4 lg:text-4xl xl md:text-3xl text-lg italic">
            Discover, Collect, Sell and Create your NFT
          </h1>

          <h1 className="text-white md:hidden font-medium mb-2 lg:text-4xl  md:text-3xl text-2xl italic">
            Discover, Collect, Sell and
          </h1>
          <h1 className="text-white md:hidden font-medium mb-4 lg:text-4xl xl md:text-3xl text-2xl italic">
            Create your NFT
          </h1>

          <p className="text-gray-400 hidden md:block mt-4 md:mt-14 text-lg md:text-xl font-medium">
            Digital marketplace for crypto collectibles and non fungable tokens.
          </p>
          <p className="text-gray-400 md:hidden mt-2 md:mt-14 text-lg md:text-xl font-medium">
            Digital marketplace for crypto
          </p>
          <p className="text-gray-400 md:hidden mt-2 md:mt-14 text-lg md:text-xl font-medium">
            collectibles and non fungable tokens.
          </p>
          <section className="flex md:mt-14 mt-8 gap-8 md:gap-10">
            <button
              className="text-white font-semibold text-base rounded-md md:px-14 px-8 py-2 md:py-3 bg-blue-600"
              onClick={Explore}
            >
              Explore
            </button>

            <button className="text-white font-semibold text-base rounded-md  md:px-14 px-8 py-2 md:py-3 bg-red-600">
              Create
            </button>
          </section>
        </div>
      </section>
      <MainCollection />

      <AboutUs />
      <div
        className="w-14 hidden  bottom-8 h-14 z-10 cursor-pointer md:grid border right-8 md:fixed border-blue-200 place-content-center rounded-full bg-blue-600"
        onClick={chat}
      >
        {' '}
        <FaCommentDots className="text-blue-100 w-7 h-7 " />
        <div className="h-4 w-4 border-2 border-gray-300  absolute rounded-full bg-green-600"></div>
      </div>
      <div
        className="w-14 md:hidden  bottom-8 h-14 z-10 cursor-pointer grid border right-8 fixed border-blue-200 place-content-center rounded-full bg-blue-600"
        onClick={chatroute}
      >
        {' '}
        <FaCommentDots className="text-blue-100 w-7 h-7 " />
        <div className="h-4 w-4 border-2 border-gray-300  absolute rounded-full bg-green-600"></div>
      </div>
      {openchat && <UserChat setOpenChat={setOpenChat} openchat={openchat} />}
    </section>
  );
}
export default MainHomePage;
