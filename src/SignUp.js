import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaWallet } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useOutletContext } from 'react-router-dom';
import './App.css';
import { NavLink } from 'react-router-dom';
/*if (
  SignUpinputs.confirmPassword.length > 0 &&
  SignUpinputs.email.length > 0 &&
  SignUpinputs.fullName.length > 0 &&
  SignUpinputs.password.length > 0
) {*/
function SignUp() {
  const [visibility, setVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [checkpass, setcheckPass] = useState(false);

  const [SignUpinputs, setsignUpInputs] = useState({
    email: '',
    password: '',
    fullName: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const home = () => {
    navigate('/HomePage');
  };
  const handleFormChanges = (e) => {
    const { name, value } = e.target;

    setsignUpInputs((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };
  const handlePassword = () => {
    setVisibility((prevstate) => !prevstate);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    setLoading(true);
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: SignUpinputs.email,
        username: SignUpinputs.fullName,
        password: SignUpinputs.password,
      }),
    };

    try {
      const response = await fetch(
        'https://artifynft.onrender.com/signUp',
        options,
      );
      const data = await response.json();

      if (data.UserId) {
        localStorage.setItem('Id', data.UserId);
        navigate('/');
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error);
    }
  };
  const back = () => {
    navigate('/HomePage');
  };

  return (
    <div>
      <div className={`main-content ${loading ? 'blurred' : ''}`}>
        <section className="grid h-full App  bg-black place-items-center pt-20">
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

          <header className="top-0 fixed w-full h-20 items-center bg-black glass-header flex justify-around z-10">
            <div className="text-white     cursor-pointer  " onClick={home}>
              <p className="lg:text-4xl text-2xl font-semibold ">ArtifyNft's</p>
            </div>
          </header>
          <p className=" md:font-bold lg:text-xl mt-8 text-base font-semibold  text-white">
            SIGNUP
          </p>
          <p className="mt-3 text-white  font-bold text-lg  md:text-xl">
            Create an Account
          </p>

          <div className=" form mb-14  rounded-lg  xl:w-270 w-90% md:w-260 md:mt-8 mt-6  pb-8 ">
            <form onSubmit={handleSignUp}>
              <section className="mt-8 grid place-items-center">
                <div className="flex gap-4 w-90%">
                  <div>
                    {' '}
                    <FaUser className="text-white " size={15} />
                  </div>
                  <p className="text-white  text-sm  font-medium">Name</p>
                </div>
                <input
                  required
                  name="fullName"
                  onChange={handleFormChanges}
                  value={setsignUpInputs.fullName}
                  type="text"
                  placeholder="Enter your Fullname"
                  className="mt-3 placeholder:text-base pl-4 w-90% outline-none placeholder:font-medium text-black py-3 bg-white rounded-md placeholder:text-gray-400 "
                />
              </section>
              <section className="mt-6 grid place-items-center">
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
                  value={setsignUpInputs.email}
                  type="email"
                  placeholder="info@yourmail.com"
                  className="mt-3 text-base font-medium placeholder:text-base pl-4 w-90% outline-none placeholder:font-medium text-black py-3 bg-white rounded-md placeholder:text-gray-400 "
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
                  value={setsignUpInputs.password}
                  type={visibility ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="mt-3 text-base font-medium  placeholder:text-base pl-4 w-90% outline-none placeholder:font-medium text-black py-3 bg-white rounded-md placeholder:text-gray-400 "
                  required
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
                  name="confirmPassword"
                  onChange={handleFormChanges}
                  value={setsignUpInputs.confirmPassword}
                  type={visibility ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  className="mt-3 text-base font-medium  placeholder:text-base pl-4 w-90% outline-none placeholder:font-medium text-black rounded-md bg-white py-3  placeholder:text-gray-400 "
                  required
                />
              </section>
              <section className="mt-6 grid  place-items-center">
                <div className="flex gap-4 w-90%">
                  <input
                    type="checkbox"
                    className="w-5 h-5  accent-black  checked:accent-purple-600"
                    onClick={handlePassword}
                  />
                  <p className="text-white  text-sm  font-medium">
                    {' '}
                    Show Password
                  </p>
                </div>
              </section>
              <section className="mt-8 grid ml-4   place-items-center">
                <div className="flex gap-4 w-90%">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-black  checked:accent-purple-600"
                    required
                  />
                  <p className="text-white  text-sm  font-medium">
                    {' '}
                    I agree to{' '}
                    <span className="text-purple-400">Privacy Policy</span>
                  </p>
                </div>
              </section>
              <section className="place-items-center grid mt-8">
                <button
                  type="submit"
                  className=" hover:bg-purple-600 md:text-lg md:py-3 text-base form font-medium rounded-full py-2 bg-black w-90% text-white"
                  required
                >
                  Sign Up
                </button>

                <p className="text-white mt-8">
                  Already have an account?{' '}
                  <span>
                    {' '}
                    <NavLink
                      className="font-medium hover:text-purple-300 text-base text-purple-400"
                      to="/Login"
                    >
                      Sign in
                    </NavLink>
                  </span>
                </p>
              </section>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
export default SignUp;
