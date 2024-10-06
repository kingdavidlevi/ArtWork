import { useState } from 'react';
/* // Reset height to auto
 */
function UserChat() {
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
    // Set height based on scrollHeight
  };

  return (
    <div className="md:h-85% md:w-97 overflow-y-hidden   md:rounded-xl md:right-6 h-full z-30 w-full dropdown shadow-xl fixed bottom-0  md:bottom-6">
      <div className="h-32 pl-10 md:rounded-t-xl pt-3 bg-blue-600">
        <h1 className="text-white text-lg font-medium">
          Hello <span>David</span> {'\u{1F44B}'},
        </h1>
        <h1 className="text-white mt-4 text-lg font-medium">
          How can we help you?
        </h1>
        <section className=" flex gap-2">
          <div className="h-2.5 w-2.5 mt-1 bg-green-400 rounded-full"></div>
          <p className="text-sm font-medium text-gray-300">Online</p>
        </section>
      </div>
      <section className="absolute grid place-items-center   w-full bottom-20">
        <form>
          <textarea
            value={text}
            rows="1"
            onChange={handleChange}
            className=" pl-4 pr-14 text-area overflow-y-scroll block h-auto max-h-32 md:w-90 w-75 placeholder:text-base placeholder:font-normal text-base font-medium  outline-none rounded-2xl py-1.5 bg-white"
            placeholder="Type your message here"
            style={{
              // Hide the scrollbar
              resize: 'none', // Disable manual resizing
              boxSizing: 'border-box',
              lineHeight: '1.5em',
            }}
          />
        </form>
      </section>
    </div>
  );
}
export default UserChat;
