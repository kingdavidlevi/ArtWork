import io from 'socket.io-client';
const [messages, setMessages] = useState([]);
const [Dbmessages, setDbMessages] = useState();

const { isfromChat } = useChatContext();
const [mySocket, setMySocket] = useState();

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

useEffect(() => {
  const fetdata = async () => {
    try {
      const response = await fetch(
        `https://middlemanbackend.onrender.com/getmessages/${params.id}`,
        {
          method: 'GET',
          credentials: 'include',
        },
      );
      const data = await response.json();
      setDbMessages(data);
    } catch (err) {
      console.log(err);
    }
  };
  fetdata();
}, [params.id]);

useEffect(() => {
  if (Dbmessages?.messages?.length > 0) {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  }
}, [Dbmessages]);

useEffect(() => {
  const fetdata = async () => {
    const option = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ contactId: params.id }),
    };
    try {
      const response = await fetch(
        'https://middlemanbackend.onrender.com/markAsRead',
        option,
      );
      const data = await response.json();
      console.log(data);
      // Scroll after marking messages as read
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    } catch (err) {
      console.log(err);
    }
  };

  fetdata(); // Call the async function
}, [messages, Dbmessages]);

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
  if (text.trim() && params.id) {
    mySocket.emit('private chat', {
      from: user?.Id,
      to: params.id,
      message,
      timestamp: Date.now(),
    });
    settext(''); // Clear the input field
  }
};
const handleChange = (e) => {
  settext(e.target.value);
};

{
  messages.map((prev) => (
    <div
      className={`text-white ${
        prev.from === user?.Id
          ? 'mr-0 self-end message-right'
          : prev.from === 'middleman'
          ? 'bg-purple'
          : 'ml-0 self-start message-left'
      } h-auto mt-5 m-auto p-2 flex flex-col gap-2 w-107 bg-black rounded-lg relative`}
      key={prev.id} // Make sure each message has a unique key
    >
      <p>{prev.message}</p>
    </div>
  ));
}
