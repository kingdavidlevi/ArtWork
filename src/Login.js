import React, { useState, useEffect } from 'react';
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

function Login() {
  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState('');
  const [Logininputs, setLoginInputs] = useState({
    email: '',
    password: '',
  });
  const handlePassword = () => {
    setVisibility((prevstate) => !prevstate);
  };
  const home = () => {
    navigate('/HomePage');
  };

  const handleFormChanges = (e) => {
    const { name, value } = e.target;

    setLoginInputs((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    setLoading(true);
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: Logininputs.email,
        password: Logininputs.password,
      }),
    };

    try {
      const response = await fetch(
        'https://artifynft.onrender.com/signIn',
        options,
      );
      const data = await response.json();

      if (data.UserId) {
        localStorage.setItem('Id', data.UserId);
        navigate('/');
      }
    } catch (error) {
      setErrorMessage(error);
      console.log(errorMessage);
    }

    setLoading(false);
  };

  const back = () => {
    navigate('/HomePage');
  };

  return (
    <section className=" App grid place-content-center    h-screen   w-full  bg-black  ">
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div
        className=" cursor-pointer absolute h-8 w-8 rounded-full grid left-6 top-4  dropdown-li place-items-center z-20"
        onClick={back}
      >
        <FaArrowLeft className="text-white text-base md:text-lg  " />
      </div>
      <div className={`main-content ${loading ? 'blurred' : ''}`}>
        <header className="top-0 fixed w-full h-20 items-center bg-black glass-header flex justify-around z-10">
          <div className="text-white     cursor-pointer  " onClick={home}>
            <p className="lg:text-4xl text-2xl font-semibold ">ArtifyNft's</p>
          </div>
        </header>
        <p className=" font-semibold  mt-8 text-base  md:text-xl grid place-items-center  text-white">
          LOGIN
        </p>
        <div className="   mb-14  form rounded-lg  xl:w-270  md:w-260 w-90 mt-6 pt-2 pb-8 ">
          <form onSubmit={handleSignIn}>
            <section className="mt-8 grid place-items-center">
              <div className="flex gap-4 w-90%">
                <div>
                  {' '}
                  <FaEnvelope className="text-white mt-0.5 " size={15} />
                </div>
                <p className="text-white text-sm  font-medium ">
                  Email address{' '}
                </p>
              </div>
              <input
                name="email"
                onChange={handleFormChanges}
                value={Logininputs.email}
                type="email"
                placeholder="info@yourmail.com"
                className="mt-3 text-base font-medium placeholder:text-base pl-4 w-90% outline-none placeholder:font-medium text-black py-3 bg-white rounded-md  placeholder:text-gray-400 "
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
                name="password"
                onChange={handleFormChanges}
                value={Logininputs.password}
                type={visibility ? 'text' : 'password'}
                placeholder="Enter your password"
                className="mt-3 text-base font-medium  placeholder:text-base pl-4 w-90% outline-none placeholder:font-medium text-black py-3 bg-white rounded-md placeholder:text-gray-400 "
                required
              />
            </section>

            <section className="mt-6 grid  place-items-center">
              <div className="flex gap-4 w-90%">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-black peer checked:accent-purple-600"
                  onClick={handlePassword}
                />
                <p className="text-white  text-sm  font-medium">
                  {' '}
                  Show Password
                </p>
              </div>
            </section>

            <section className="place-items-center grid mt-8">
              <button
                type="submit"
                className=" hover:bg-purple-600 md:text-lg text-base form font-medium rounded-full md:py-3 py-2 bg-black w-90% text-white"
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
      </div>
    </section>
  );
}
export default Login;
