import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function AdminPage({ openchat, setOpenChat }) {
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
    <section className="md:w-97 md:h-80% pt-24 md:pt-14    md:rounded-xl md:right-6 h-full z-30 w-full dropdown shadow-xl fixed bottom-0 md:bottom-6 ">
      <div className="h-20 pl-4 fixed w-full z-50 top-0 md:top-24 md:w-97 md:rounded-t-xl pt-3 bg-blue-600">
        <h1 className="text-white text-lg font-medium">Admin {'\u{1F44B}'},</h1>

        <section className=" mt-2 flex gap-2">
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
      <div className="h-18 pl-4 fixed w-full md:w-97  md:bottom-6  z-50 bottom-0  pt-3 bg-blue-600">
        <div className=" md:w-97 grid items-center place-items-center w-full">
          <svg
            height="40px"
            width="40px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 58 58"
          >
            <g>
              <path
                style={{ fill: '#4DC95B' }}
                d="M1.653,12.5C0.74,12.5,0,13.24,0,14.153V47.5v8l8-8h35.347C44.26,47.5,45,46.76,45,45.847V14.153
        c0-0.913-0.74-1.653-1.653-1.653H1.653z"
              />
              <path
                style={{ fill: '#FFFFFF' }}
                d="M22,23.5H10c-0.553,0-1-0.448-1-1s0.447-1,1-1h12c0.553,0,1,0.448,1,1S22.553,23.5,22,23.5z"
              />
              <path
                style={{ fill: '#FFFFFF' }}
                d="M35,30.5H10c-0.553,0-1-0.448-1-1s0.447-1,1-1h25c0.553,0,1,0.448,1,1S35.553,30.5,35,30.5z"
              />
              <path
                style={{ fill: '#FFFFFF' }}
                d="M35,37.5H10c-0.553,0-1-0.448-1-1s0.447-1,1-1h25c0.553,0,1,0.448,1,1S35.553,37.5,35,37.5z"
              />
              <path
                style={{ fill: '#298430' }}
                d="M56.347,2.5H14.653C13.74,2.5,13,3.24,13,4.153V12.5h30.347C44.26,12.5,45,13.24,45,14.153V37.5h11.347
        C57.26,37.5,58,36.76,58,35.847V4.153C58,3.24,57.26,2.5,56.347,2.5z"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="  md:h-80% h-full     text-area  overflow-y-scroll  ">
        <div className="py-4 h-300 md:h-80%  cursor-pointer dropdown-li px-4 rounded-md text-white  mx-4 ">
          <p>Christopher</p>
          <div></div>
        </div>
      </div>
    </section>
  );
}
export default AdminPage;
