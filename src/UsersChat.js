function UserChat() {
  return (
    <div className="md:h-85% md:w-97 overflow-y-hidden   md:rounded-xl md:right-6 h-full z-30 w-full dropdown shadow-xl fixed bottom-0  md:bottom-6">
      <div className="h-32 pl-10 md:rounded-t-xl pt-2 bg-blue-600">
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
      <section className="fixed grid place-items-center  md:w-97 w-full bottom-20">
        <form>
          <input
            className="w-full pl-4 pr-14 block text-wrap  placeholder:text-base placeholder:font-normal text-base font-medium min-w-90% outline-none rounded-2xl py-1.5 bg-white"
            placeholder="Type your message here"
          />
        </form>
      </section>
    </div>
  );
}
export default UserChat;
