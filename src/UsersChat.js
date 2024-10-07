import { useState } from 'react';
import { FaTimes, FaRegPaperPlane } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
/* // Reset height to auto
 */
function UserChat({ openchat, setOpenChat }) {
  const [text, setText] = useState('');

  const [messages, setMessages] = useState([
    { text: 'Hello!', isSelf: false },
    { text: 'Hi there!', isSelf: true },
    { text: 'How are you?', isSelf: false },
    { text: 'How are you?', isSelf: false },
    { text: 'I am good, thank you!', isSelf: true },
    {
      text: 'I am good, thank you! i want to mint an art how do i do it',
      isSelf: true,
    },
  ]);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setText(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
    // Set height based on scrollHeight
  };
  const closeChat = () => {
    setOpenChat(false);
  };
  const closeChatroute = () => {
    navigate('/');
  };

  return (
    <section className="md:w-97 md:h-80% pt-34 md:pt-28   md:rounded-xl md:right-6 h-full z-30 w-full dropdown shadow-xl fixed bottom-0 top-0 md:bottom-6 ">
      <div className="h-32 pl-10 fixed w-full z-50 top-0 md:top-24 md:w-97 md:rounded-t-xl pt-3 bg-blue-600">
        <h1 className="text-white text-lg font-medium">
          Hello <span>David</span> {'\u{1F44B}'},
        </h1>
        <p className=" mt-2 text-sm font-medium text-gray-200 ">
          Welcome to ArtifyNft Online support team.
        </p>
        <h1 className="text-white text-lg font-medium">How can we help you?</h1>
        <section className=" flex gap-2">
          <div className="h-2.5 w-2.5 mt-1 bg-green-400 rounded-full"></div>
          <p className="text-sm font-medium text-gray-300">Online</p>
        </section>
        <div
          className="absolute top-4  hidden md:block cursor-pointer right-4 "
          onClick={closeChat}
        >
          <FaTimes className="text-white text-lg" />
        </div>
        <div
          className="absolute md:hidden top-4 cursor-pointer right-4 "
          onClick={closeChatroute}
        >
          <FaTimes className="text-white text-lg" />
        </div>
      </div>
      <div className="  md:h-80% h-full text-area  overflow-y-scroll  ">
        <section className="fixed md:block  md:w-97 pr-4  pl-4  z-40 bottom-6 w-full md:bottom-14">
          <form>
            <textarea
              value={text}
              rows="1"
              onChange={handleChange}
              className=" pl-4 pr-14 text-area overflow-y-scroll block h-auto max-h-32 w-85% md:w-90% placeholder:text-base placeholder:font-normal text-base font-medium  outline-none rounded-2xl py-1.5 bg-white"
              placeholder="Type your message here"
              style={{
                // Hide the scrollbar
                resize: 'none', // Disable manual resizing
                boxSizing: 'border-box',
                lineHeight: '1.5em',
              }}
            />
            <div className="h-10 grid place-items-center cursor-pointer fixed right-4 md:right-8 bottom-6 md:bottom-14 rounded-full text-white bg-blue-600 w-10">
              <svg
                fill="#fff"
                width="20px"
                height="20px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>paper-plane-top</title>
                <path d="M31.083 16.589c0.105-0.167 0.167-0.371 0.167-0.589s-0.062-0.421-0.17-0.593l0.003 0.005c-0.030-0.051-0.059-0.094-0.091-0.135l0.002 0.003c-0.1-0.137-0.223-0.251-0.366-0.336l-0.006-0.003c-0.025-0.015-0.037-0.045-0.064-0.058l-28-14c-0.163-0.083-0.355-0.132-0.558-0.132-0.691 0-1.25 0.56-1.25 1.25 0 0.178 0.037 0.347 0.104 0.5l-0.003-0.008 5.789 13.508-5.789 13.508c-0.064 0.145-0.101 0.314-0.101 0.492 0 0.69 0.56 1.25 1.25 1.25 0 0 0 0 0.001 0h-0c0.001 0 0.002 0 0.003 0 0.203 0 0.394-0.049 0.563-0.136l-0.007 0.003 28-13.999c0.027-0.013 0.038-0.043 0.064-0.058 0.148-0.088 0.272-0.202 0.369-0.336l0.002-0.004c0.030-0.038 0.060-0.082 0.086-0.127l0.003-0.006zM4.493 4.645l20.212 10.105h-15.88zM8.825 17.25h15.88l-20.212 10.105z"></path>
              </svg>
            </div>
          </form>
        </section>

        <div className="h-300  text-white mx-6 ">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-wrapper text-white font-medium  ${
                message.isSelf ? 'left text-white' : 'right  '
              }`}
            >
              <div
                className={`chat-message  ${
                  message.isSelf ? 'left ' : 'right bg-blue-500 text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default UserChat;
