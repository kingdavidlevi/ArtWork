import React from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  FaGreaterThan,
  FaCalendar,
  FaCommentDots,
  FaUsers,
  FaPencil,
} from 'react-icons/fa6';

function Menu() {
  const { isOpen, setIsOpen } = useOutletContext();
  return (
    <div
      className={` z-20 bg-black fixed h-full w-full sm:hidden mt-18 menu ${
        isOpen ? 'open' : ''
      }`}
    >
      <ul className="flex px-4  text-red-600  cursor-pointer justify-end w-full ul items-center  h-20 ">
        <li className="flex  items-center gap-3 w-full">
          <FaCalendar className="text-white  text-2xl" />
          <p className="text-white  text-base font-semibold">Drops</p>
        </li>
        <li>
          <FaGreaterThan className="font-bold text-sm text-white" />
        </li>
      </ul>
      <ul className="flex px-4  text-red-600  cursor-pointer justify-end w-full ul items-center  h-20 ">
        <li className="flex  items-center gap-3 w-full">
          <FaPencil className="text-white  text-2xl" />
          <p className="text-white  text-base font-semibold">Create</p>
        </li>
      </ul>
      <ul className="flex px-4  text-red-600  cursor-pointer justify-end w-full ul items-center  h-20 ">
        <li className="flex  items-center gap-3 w-full">
          <FaUsers className="text-white  text-3xl" />
          <p className="text-white  text-base font-semibold">Authors</p>
        </li>
      </ul>

      <div></div>
    </div>
  );
}

export default Menu;
