import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import pic from '../src/Images/images (9).jpeg';
import image1 from './Images/587a05c52581818aff54365e2025bb19.jpg';
import image2 from './Images/5e78aed4f319d80d1359d37e339bc1b0.jpg';
import image3 from './Images/be842cbfe79630ac351b546f0c17643f.jpg';
import image4 from './Images/c884b357257314ae0d161084eff8bfd0.jpg';
import image5 from './Images/d8fbb30d96343468cdbc37ef6fe288af.jpg';

function Collection() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/data/collection.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => setData(data.cancelled_deliveries))
      .catch((error) => console.error('Error fetching the JSON data:', error));
  }, []);
  return (
    <section className=" md:w-full grid md:place-items-start place-items-center">
      <div className="md:mt-16 mt-10 w-90% md:w-full place-items-center  flex gap-2  ">
        <h1 className="text-white  lg:text-2xl md:text-lg font-bold">
          Latest Collection
        </h1>
        <FaArrowRight className="text-white mt-1.5 md:mt-2" />
      </div>

      <section className="md:flex grid   grid-cols-2   md:justify-between place-items-center mt-8 w-90% md:w-full  pb-20 gap-3">
        <div className="color-div form px-3 md:w-60 w-40  lg:w-70 xl:w-75 pt-3 rounded-lg shadow-md  pb-4">
          <section>
            {' '}
            <img
              src={image1}
              className="md:h-48 h-32 rounded-lg w-60 lg:w-70 xl:w-75"
            />{' '}
          </section>
          <div className=" mt-4">
            <p className=" text-white  text-base  font-semibold">
              Adams Christopher
            </p>
            <section className="w-full flex justify-between mt-4">
              <p className="text-white   text-base font-semibold">Amount :</p>
              <p className="text-white  text-base  font-semibold">
                <span>0.2</span>ETH
              </p>
            </section>
            <section className="w-full flex justify-between mt-4">
              <p className="text-white   text-base font-semibold">Total:</p>
              <p className="text-white  text-base  font-semibold">
                <span>20</span>ETH
              </p>
            </section>
          </div>
        </div>
        <div className="color-div form px-3   md:w-60 w-40 lg:w-70 xl:w-75 pt-3 rounded-lg shadow-md  pb-4">
          <section>
            {' '}
            <img
              src={image2}
              className="md:h-48 h-32  rounded-lg w-60 lg:w-70 xl:w-75"
            />{' '}
          </section>
          <div className=" mt-4">
            <p className=" text-white  text-base  font-semibold">
              Adams Christopher
            </p>
            <section className="w-full flex justify-between mt-4">
              <p className="text-white   text-base font-semibold">Amount :</p>
              <p className="text-white  text-base  font-semibold">
                <span>0.2</span>ETH
              </p>
            </section>
            <section className="w-full flex justify-between mt-4">
              <p className="text-white   text-base font-semibold">Total:</p>
              <p className="text-white  text-base  font-semibold">
                <span>20</span>ETH
              </p>
            </section>
          </div>
        </div>
        <div className="color-div form px-3 md:w-60 w-40 lg:w-70 xl:w-75 pt-3 rounded-lg shadow-md  pb-4">
          <section>
            {' '}
            <img
              src={image3}
              className="md:h-48 h-32  rounded-lg w-60 lg:w-70 xl:w-75"
            />{' '}
          </section>
          <div className=" mt-4">
            <p className=" text-white  text-base  font-semibold">
              Adams Christopher
            </p>
            <section className="w-full flex justify-between mt-4">
              <p className="text-white   text-base font-semibold">Amount :</p>
              <p className="text-white  text-base  font-semibold">
                <span>0.2</span>ETH
              </p>
            </section>
            <section className="w-full flex justify-between mt-4">
              <p className="text-white   text-base font-semibold">Total:</p>
              <p className="text-white  text-base  font-semibold">
                <span>20</span>ETH
              </p>
            </section>
          </div>
        </div>

        <div className="color-div form px-3  md:w-60 w-40 lg:w-70 xl:w-75 pt-3 rounded-lg shadow-md  pb-4">
          <section>
            {' '}
            <img
              src={image4}
              className="md:h-48 h-32  rounded-lg w-60  lg:w-70 xl:w-75"
            />{' '}
          </section>
          <div className=" mt-4">
            <p className=" text-white  text-base  font-semibold">
              Adams Christopher
            </p>
            <section className="w-full flex justify-between mt-4">
              <p className="text-white   text-base font-semibold">Amount :</p>
              <p className="text-white  text-base  font-semibold">
                <span>0.2</span>ETH
              </p>
            </section>
            <section className="w-full flex justify-between mt-4">
              <p className="text-white   text-base font-semibold">Total:</p>
              <p className="text-white  text-base  font-semibold">
                <span>20</span>ETH
              </p>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Collection;
