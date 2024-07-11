import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

function SignUp() {
  return (
    <section className="grid place-items-center mt-40">
      <p className=" font-bold text-sm   text-blue-900">SIGNUP</p>
      <p className="mt-3 text-black  font-bold  text-xl">Create an Account</p>

      <div className="bg-blue-900  rounded-lg  xl:w-270 w-260 mt-4">
        <section className="mt-8 grid place-items-center">
          <div className="flex gap-4 w-90%">
            <div>
              {' '}
              <FaUser className="text-white " size={15} />
            </div>
            <p className="text-white  text-sm  font-medium">Name</p>
          </div>
          <input
            type="text"
            placeholder="Enter your Fullname"
            className="mt-3 placeholder:text-base pl-4 w-90% outline-none placeholder:font-medium text-gray-400 py-3 bg-black placeholder:text-gray-400 "
          />
        </section>
        <section className="mt-6 grid place-items-center">
          <div className="flex gap-4 w-90%">
            <div>
              {' '}
              <FaEnvelope className="text-white mt-0.5 " size={15} />
            </div>
            <p className="text-white text-sm  font-medium ">Email address </p>
          </div>
          <input
            type="email"
            placeholder="info@yourmail.com"
            className="mt-3 placeholder:text-base pl-4 w-90% outline-none placeholder:font-medium text-gray-400 py-3 bg-black placeholder:text-gray-400 "
          />
        </section>
        <section className="mt-6 grid place-items-center">
          <div className="flex gap-4 w-90%">
            <div>
              {' '}
              <FaLock className="text-white " size={15} />
            </div>
            <p className="text-white text-sm font-medium">Password</p>
          </div>
          <input
            type="password"
            placeholder="Enter your password"
            className="mt-3 placeholder:text-base pl-4 w-90% outline-none placeholder:font-medium text-gray-400 py-3 bg-black placeholder:text-gray-400 "
          />
        </section>
        <section className="mt-6 grid place-items-center">
          <div className="flex gap-4 w-90%">
            <div>
              {' '}
              <FaUser className="text-white " size={15} />
            </div>
            <p className="text-white  text-sm  font-medium">
              {' '}
              Confirm Password
            </p>
          </div>
          <input
            type="password"
            placeholder="Confirm your password"
            className="mt-3 placeholder:text-base pl-4 w-90% outline-none placeholder:font-medium text-gray-400 py-3 bg-black placeholder:text-gray-400 "
          />
        </section>
        <section className="mt-6 grid  place-items-center">
          <div className="flex gap-4 w-90%">
            <input type="checkbox" className="w-5 h-5" />
            <p className="text-white  text-sm  font-medium"> Show Password</p>
          </div>
        </section>
        <section className="mt-8 grid ml-4   place-items-center">
          <div className="flex gap-4 w-90%">
            <input type="checkbox" className="w-5 h-5 " />
            <p className="text-white  text-sm  font-medium">
              {' '}
              I agree to <span>Privacy Policy</span>
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
export default SignUp;
