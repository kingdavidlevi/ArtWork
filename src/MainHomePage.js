import MainCollection from './MainCollection';
import MainTrending from './MainTrending';
import AboutUs from './AboutUs';
import { FaCommentDots } from 'react-icons/fa6';
import { useOutletContext } from 'react-router-dom';
function MainHomePage() {
  const { walletOpen, setWalletOpen } = useOutletContext();

  const toggleWallet = () => {
    setWalletOpen(false);
  };
  return (
    <section
      className={`${walletOpen ? ' md:block md:pt-32 pt-28' : 'pt-32 '}`}
      onClick={toggleWallet}
    >
      <section className="md:block md:place-items-start grid place-items-center">
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
            <button className="text-white font-semibold text-base rounded-md md:px-14 px-8 py-2 md:py-3 bg-blue-600">
              Explore
            </button>

            <button className="text-white font-semibold text-base rounded-md  md:px-14 px-8 py-2 md:py-3 bg-red-600">
              Create
            </button>
          </section>
        </div>
      </section>
      <MainCollection />
      <MainTrending />
      <AboutUs />
      <div className="w-14  bottom-8 h-14 z-10  grid border right-8 fixed border-blue-200 place-content-center rounded-full bg-blue-600">
        {' '}
        <FaCommentDots className="text-blue-100 w-7 h-7 " />
      </div>
    </section>
  );
}
export default MainHomePage;
