import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { FaTimes, FaRegPaperPlane } from 'react-icons/fa';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';

/* // Reset height to auto
 const [messages, setMessages] = useState([
    { text: 'Hello!', isSelf: false },
    { text: 'Hi there!', isSelf: true },
    { text: 'Hello!', isSelf: false },
    { text: 'Hello!', isSelf: false },
    { text: 'Hi there!', isSelf: true },
    { text: 'Hi there!', isSelf: true },
    { text: 'Hi there!', isSelf: true },
    { text: 'Hi there!', isSelf: true },
    { text: 'Hi there!', isSelf: true },
    { text: 'Hello!', isSelf: false },
    { text: 'Hi there!', isSelf: true },
    { text: 'Hello!', isSelf: false },
    { text: 'Hi there!', isSelf: true },
    { text: 'Hello!', isSelf: false },
    { text: 'Hi there!', isSelf: true },
    { text: 'Hello!', isSelf: false },
    { text: 'Hi there!', isSelf: true },
    { text: 'Hello!', isSelf: false },
    { text: 'Hi there!', isSelf: true },
    { text: 'Hello!', isSelf: false },
    { text: 'Hi there!', isSelf: true },
    { text: 'Hello!', isSelf: false },
    { text: 'Hi there!', isSelf: true },
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
    const Chatitems = () => {};
  useEffect(() => {
    const socket = io('https://middlemanbackend.onrender.com');
    socket.emit('setCustomId', user?.Id);
    setMySocket(socket);
  }, []);
  useEffect(() => {
    mySocket?.on('private chat', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      console.log(data);
    });
    return () => {
      mySocket?.off('private chat');
    };
  }, [mySocket]);

 */
function UserChat({ openchat, setOpenChat, laptopId, lapUser }) {
  const [text, setText] = useState('');
  const [mySocket, setMySocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [Dbmessages, setDbMessages] = useState([]);
  const { user, setuser } = useOutletContext();
  const navigate = useNavigate();
  const params = useParams(); // Use useParams hook to get route parameters
  const messagesEndRef = useRef(null);
  const Id = localStorage.getItem('Id');

  useEffect(() => {
    const socket = io('http://localhost:3500');
    socket.emit('setCustomId', Id);
    setMySocket(socket);
  }, []);
  useEffect(() => {
    mySocket?.on('private chat', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      console.log(data);
    });
    return () => {
      mySocket?.off('private chat');
    };
  }, [mySocket]);
  console.log(messages);
  console.log(Dbmessages);
  console.log(user);
  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);

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
  console.log(laptopId);

  useEffect(() => {
    const checkId = () => {
      let msgId;
      if (lapUser) {
        msgId = lapUser;
      }
      if (laptopId) {
        msgId = laptopId;
      }
      if (params.id) {
        msgId = params.id;
      }
      return msgId;
    };
    const fetdata = async (id) => {
      try {
        console.log(id);
        const response = await fetch(
          `http://localhost:3500/getmessages/${Id}/${id}`,
          {
            method: 'GET',
            headers: {
              'content-type': 'application/json',
            },
          },
        );
        const data = await response.json();
        console.log(data);
        setDbMessages(data);
        console.log(Dbmessages);
      } catch (err) {
        console.log(err);
      }
    };
    fetdata(checkId());
  }, [params.id, lapUser, laptopId]);

  useEffect(() => {
    if (Dbmessages?.messages?.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
    }
  }, [Dbmessages]);

  // useEffect(() => {
  //   const fetdata = async () => {
  //     const option = {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ contactId: params.id }),
  //     };
  //     try {
  //       const response = await fetch(
  //         'https://middlemanbackend.onrender.com/markAsRead',
  //         option,
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       // Scroll after marking messages as read
  //       messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetdata(); // Call the async function
  // }, [messages, Dbmessages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages((prevMessages) => [...prevMessages]); // Trigger re-render
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (timestamp) => {
    const now = new Date();
    const messageTime = new Date(timestamp);

    const diffInMinutes = Math.floor(
      (now.getTime() - messageTime.getTime()) / 60000,
    );

    if (diffInMinutes < 1) {
      return 'Just now';
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} min ago`; // Use backticks for template literals
    } else {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} hr${hours > 1 ? 's' : ''} ago`; // Use backticks for template literals
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    mySocket.emit('private chat', {
      from: Id,
      to: params.id,
      text,
      timestamp: Date.now(),
    });
    console.log(text);
    setText(''); // Clear the input field
  };

  return (
    <form
      className="md:w-97 md:h-80% pt-34 md:pt-28 pb-20  md:rounded-xl md:right-6 h-full z-30 w-full dropdown shadow-xl fixed bottom-0 md:bottom-6 "
      onSubmit={handleSubmit}
    >
      {user?.admin ? (
        <div className="h-24 pl-8 fixed w-full z-50 top-0 md:top-24 md:w-97 md:rounded-t-xl pt-4 bg-blue-600">
          <h1 className="text-white text-lg font-medium">
            Admin {'\u{1F44B}'},
          </h1>

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
      ) : (
        <div className="h-32 pl-4 fixed w-full z-50  top-0 md:top-24 md:w-97 md:rounded-t-xl pt-3 bg-blue-600">
          <h1 className="text-white text-lg font-medium">
            Hello {user && <span>{user?.clientChats?.username}</span>}{' '}
            {'\u{1F44B}'} ,
          </h1>

          <p className=" mt-2 text-sm font-medium text-gray-200 ">
            Welcome to ArtifyNft Online support team.
          </p>
          <h1 className="text-white text-lg font-medium">
            How can we help you?
          </h1>
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
      )}
      <div className="   h-full text-area   overflow-y-scroll  ">
        <section className="fixed md:block  md:w-97 pr-4  pl-4  z-40 bottom-0 w-full md:bottom-8 ">
          <textarea
            value={text}
            rows="1"
            onChange={handleChange}
            className=" pl-4 pr-14    text-area overflow-y-scroll block h-auto max-h-32 w-85% md:w-90% placeholder:text-base placeholder:font-normal text-base font-medium  outline-none rounded-2xl py-1.5 bg-white"
            placeholder="Type your message here"
            style={{
              // Hide the scrollbar
              resize: 'none', // Disable manual resizing
              boxSizing: 'border-box',
              lineHeight: '1.5em',
            }}
          />
          <button>
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
          </button>
        </section>

        <div className="  text-white mx-4 ">
          {Dbmessages?.map((prev, index) => (
            <div
              key={index}
              className={`message-wrapper text-white font-medium ${
                prev.from === Id ? 'right' : 'left text-white'
              }`}
            >
              <div
                className={`chat-message relative ${
                  prev.from === Id ? 'right  bg-blue-500 text-white' : 'left'
                }`}
              >
                <p> {prev.text}</p>
                <section className="w-full flex justify-end  h-4">
                  <p className=" text text-sm  ">
                    {' '}
                    {formatTime(prev.timestamp)}
                  </p>
                </section>
              </div>
            </div>
          ))}
          {messages?.map((prev, index) => (
            <div
              key={index}
              className={`message-wrapper text-white font-medium ${
                prev.from === Id ? 'right' : 'left text-white'
              }`}
            >
              <div
                className={`chat-message ${
                  prev.from === Id ? 'right bg-blue-500 text-white' : 'left'
                }`}
              >
                <p> {prev.text}</p>
                <section className="w-full flex justify-end  h-4">
                  <p className=" text text-sm  ">
                    {' '}
                    {formatTime(prev.timestamp)}
                  </p>
                </section>
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
}
export default UserChat;
