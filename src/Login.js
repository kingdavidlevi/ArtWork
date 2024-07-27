import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Login() {
  const [visibility, setVisibility] = useState(false);

  const handlePassword = () => {
    setVisibility((prevstate) => !prevstate);
  };
  return (
    <section className="grid h-screen bg-black place-items-center pt-20">
      <p className=" font-semibold text-base  text-white">LOGIN</p>

      <div className="   mb-14 btn rounded-lg  xl:w-270 w-90% md:w-260 md:mt-8 mt-6 pb-8 ">
        <form>
          <section className="mt-8 grid place-items-center">
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
              className="mt-3 text-base font-medium placeholder:text-base pl-4 w-90% outline-none placeholder:font-medium text-gray-400 py-3 bg-black placeholder:text-gray-400 "
              required
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
              type={visibility ? 'text' : 'password'}
              placeholder="Enter your password"
              className="mt-3 text-base font-medium  placeholder:text-base pl-4 w-90% outline-none placeholder:font-medium text-gray-400 py-3 bg-black placeholder:text-gray-400 "
              required
            />
          </section>

          <section className="mt-6 grid  place-items-center">
            <div className="flex gap-4 w-90%">
              <input
                type="checkbox"
                className="w-5 h-5"
                onClick={handlePassword}
                required
              />
              <p className="text-white  text-sm  font-medium"> Show Password</p>
            </div>
          </section>

          <section className="place-items-center grid mt-8">
            <button
              type="submit"
              className=" hover:bg-purple-600 text-base font-medium rounded-full py-2 bg-black w-90% text-white"
              required
            >
              Log In
            </button>
            <p className="text-white mt-8">
              Don't have an account?{' '}
              <span>
                {' '}
                <NavLink
                  className="font-medium hover:text-purple-300 text-base text-purple-400"
                  to="/SignUp"
                >
                  Register Now
                </NavLink>
              </span>
            </p>
          </section>
        </form>
      </div>
    </section>
  );
}
export default Login;
