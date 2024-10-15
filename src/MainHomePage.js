import MainCollection from './MainCollection';
import { NavLink, useNavigate } from 'react-router-dom';
import AboutUs from './AboutUs';
import { FaCommentDots } from 'react-icons/fa6';
import { useOutletContext } from 'react-router-dom';
import UserChat from './UsersChat';
import { useEffect, useState } from 'react';
import AdminPage from './AdminPage';
function MainHomePage() {
  const { walletOpen, explorer, handleChat, setExplorer, setWalletOpen } =
    useOutletContext();
  const [openchat, setOpenChat] = useState(false);
  const [openchatAdmin, setOpenChatAdmin] = useState(false);
  const [laptopId, setLaptopId] = useState(null);
  const [lapUser, setLapUser] = useState(null);
  const { user, setUsers, error } = useOutletContext();
  const navigate = useNavigate();
  const Id = localStorage.getItem('Id');

  useEffect(() => {
    if (!Id) {
      navigate('/HomePage');
    }
  }, []);

  const toggleWallet = () => {
    setWalletOpen(false);
  };
  const Explore = () => {
    setExplorer((prevstate) => !prevstate);
    navigate('MainCollection');
  };
  const Nft = () => {
    navigate('/CreateNft');
  };
  const laptopchatview = (id) => {
    setLaptopId(id);
    setOpenChat(true);
    setOpenChatAdmin(false);
  };
  const chatforUsers = (id) => {
    setLapUser(id);
    setOpenChat(true);
  };
  const chatforAdmin = () => {
    setOpenChatAdmin(true);
  };
  const chatroute = () => {
    navigate('/UserChat');
  };

  return (
    <>
      {Id && (
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
                Digital marketplace for crypto collectibles and non fungable
                tokens.
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

                <button
                  className="text-white font-semibold text-base hover:bg-purple-600 rounded-md  md:px-14 px-8 py-2 md:py-3 bg-purple-700"
                  onClick={Nft}
                >
                  Create
                </button>
              </section>
            </div>
          </section>
          <MainCollection />

          <AboutUs />

          {handleChat && (
            <section>
              {user.admin ? (
                <div
                  className="w-14 hidden bottom-16 h-14 z-10 cursor-pointer md:grid border right-8 md:fixed border-blue-200 place-content-center rounded-full bg-blue-600"
                  onClick={chatforAdmin}
                >
                  <FaCommentDots className="text-blue-100 w-7 h-7" />
                  <div className="h-4 w-4 border-2 border-gray-300 absolute rounded-full bg-green-600"></div>
                </div>
              ) : (
                <div
                  className="w-14 hidden bottom-16 h-14 z-10 cursor-pointer md:grid border right-8 md:fixed border-blue-200 place-content-center rounded-full bg-blue-600"
                  onClick={() => chatforUsers(1)}
                >
                  <FaCommentDots className="text-blue-100 w-7 h-7" />
                  <div className="h-4 w-4 border-2 border-gray-300 absolute rounded-full bg-green-600"></div>
                </div>
              )}
            </section>
          )}

          {/* Handle the NavLink separately, showing it only when the user is present and no errors */}
          {handleChat && (
            <NavLink to={user.admin ? '/AdminPage' : `/UserChat/${Id}`}>
              <div className="w-14 md:hidden bottom-8 h-14 z-10 cursor-pointer grid border right-8 fixed border-blue-200 place-content-center rounded-full bg-blue-600">
                <FaCommentDots className="text-blue-100 w-7 h-7" />
                <div className="h-4 w-4 border-2 border-gray-300 absolute rounded-full bg-green-600"></div>
              </div>
            </NavLink>
          )}
          {/* Handle the case where there is an error fetching the user data */}
          {error && (
            <div className="w-14  bottom-8 h-14 z-10 cursor-pointer grid border right-8 fixed border-blue-200 place-content-center rounded-full bg-blue-600">
              <FaCommentDots className="text-blue-100 w-7 h-7" />
            </div>
          )}

          {openchat && (
            <UserChat
              setOpenChat={setOpenChat}
              openchat={openchat}
              laptopId={laptopId}
              lapUser={lapUser}
            />
          )}
          {openchatAdmin && (
            <AdminPage
              setOpenChatAdmin={setOpenChatAdmin}
              openchat={openchatAdmin}
              laptopchatview={laptopchatview}
              setOpenChat={setOpenChat}
            />
          )}
        </section>
      )}
    </>
  );
}
export default MainHomePage;
