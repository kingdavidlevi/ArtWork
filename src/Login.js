import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate();
  const handlePassword = () => {
    setVisibility((prevstate) => !prevstate);
  };
  const home = () => {
    navigate('/');
  };
  return (
    <section className="  grid place-content-center    h-screen   w-full  bg-black  ">
      <header className="top-0 fixed w-full h-20 items-center bg-black glass-header flex justify-around z-10">
        <div className="text-white     cursor-pointer  " onClick={home}>
          <p className="lg:text-4xl text-2xl font-semibold ">ArtifyNft's</p>
        </div>
      </header>
      <p className=" font-semibold  mt-8 text-base  md:text-xl grid place-items-center  text-white">
        LOGIN
      </p>
      <div className="   mb-14  form rounded-lg  xl:w-270  md:w-260 w-90 mt-6 pt-2 pb-8 ">
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
