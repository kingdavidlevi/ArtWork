import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import pic from '../src/Images/images (9).jpeg';
import image1 from './Images/587a05c52581818aff54365e2025bb19.jpg';
import image2 from './Images/5e78aed4f319d80d1359d37e339bc1b0.jpg';
import image3 from './Images/be842cbfe79630ac351b546f0c17643f.jpg';
import image4 from './Images/c884b357257314ae0d161084eff8bfd0.jpg';
import image5 from './Images/f9993c3602994dfba596aa74f67b8367.jpg';
import image6 from './Images/images (10).jpeg';
import image7 from './Images/images (11).jpeg';
import image8 from './Images/images (12).jpeg';
import image9 from './Images/images (13).jpeg';
import image10 from './Images/images (15).jpeg';
import image11 from './Images/images (16).jpeg';
import image12 from './Images/images (17).jpeg';

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

      <section className="lg:flex grid overflow-hidden  overflow-x-scroll   md:grid-cols-2   place-items-center mt-8 w-90% md:w-full  pb-20 gap-4 md:gap-10">
        <div className="color-div form px-3   w-full  md:w-70 md:min-w-70  pt-3 rounded-lg shadow-md  pb-4">
          <section>
            {' '}
            <img
              src={image1}
              className="md:h-48 h-56 w-full rounded-lg     md:w-70  "
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
          <button className="w-full py-2 mt-3 rounded-md form btn text-base font-medium  text-white">
            Buy
          </button>
        </div>
        <div className="color-div form px-3    w-40 md:w-70 md:min-w-70  pt-3 rounded-lg shadow-md  pb-4">
          <section>
            {' '}
            <img
              src={image2}
              className="md:h-48 h-32  rounded-lg    w-60 md:w-70  "
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
          <button className="w-full py-2 mt-3 rounded-md form btn text-base font-medium  text-white">
            Buy
          </button>
        </div>
        <div className="color-div form px-3  md:min-w-70  w-40 md:w-70   pt-3 rounded-lg shadow-md  pb-4">
          <section>
            {' '}
            <img
              src={image3}
              className="md:h-48 h-32  rounded-lg w-60   md:w-70  "
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
          <button className="w-full py-2 mt-3 rounded-md form btn text-base font-medium  text-white">
            Buy
          </button>
        </div>

        <div className="color-div form px-3  md:min-w-70   w-40 md:w-70   pt-3 rounded-lg shadow-md  pb-4">
          <section>
            {' '}
            <img
              src={image4}
              className="md:h-48 h-32   rounded-lg w-40   md:w-70 "
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
          <button className="w-full py-2 mt-3 rounded-md form btn text-base font-medium  text-white">
            Buy
          </button>
        </div>
        <div className="color-div form px-3  md:min-w-70   w-40 md:w-70   pt-3 rounded-lg shadow-md  pb-4">
          <section>
            {' '}
            <img
              src={image5}
              className="md:h-48 h-32  rounded-lg w-40   md:w-70 "
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
          <button className="w-full py-2 mt-3 rounded-md form btn text-base font-medium  text-white">
            Buy
          </button>
        </div>
        <div className="color-div form px-3  md:min-w-70   w-40 md:w-70   pt-3 rounded-lg shadow-md  pb-4">
          <section>
            {' '}
            <img
              src={image6}
              className="md:h-48 h-32   rounded-lg w-40   md:w-70 "
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
          <button className="w-full py-2 mt-3 rounded-md form btn text-base font-medium  text-white">
            Buy
          </button>
        </div>
        <div className="color-div form px-3  md:min-w-70   w-40 md:w-70   pt-3 rounded-lg shadow-md  pb-4">
          <section>
            {' '}
            <img
              src={image7}
              className="md:h-48 h-32   rounded-lg w-40   md:w-70 "
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
          <button className="w-full py-2 mt-3 rounded-md form btn text-base font-medium  text-white">
            Buy
          </button>
        </div>
        <div className="color-div form px-3   md:min-w-70  w-40 md:w-70   pt-3 rounded-lg shadow-md  pb-4">
          <section>
            {' '}
            <img
              src={image8}
              className="md:h-48 h-32   rounded-lg w-40   md:w-70 "
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
          <button className="w-full py-2 mt-3 rounded-md form btn text-base font-medium  text-white">
            Buy
          </button>
        </div>
        <div className="color-div form px-3   md:min-w-70  w-40 md:w-70   pt-3 rounded-lg shadow-md  pb-4">
          <section>
            {' '}
            <img
              src={image9}
              className="md:h-48 h-32    rounded-lg w-40   md:w-70 "
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
          <button className="w-full py-2 mt-3 rounded-md form btn text-base font-medium  text-white">
            Buy
          </button>
        </div>
        <div className="color-div form px-3  md:min-w-70   w-40 md:w-70   pt-3 rounded-lg shadow-md  pb-4">
          <section>
            {' '}
            <img
              src={image10}
              className="md:h-48 h-32   rounded-lg w-40   md:w-70 "
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
          <button className="w-full py-2 mt-3 rounded-md form btn text-base font-medium  text-white">
            Buy
          </button>
        </div>
        <div className="color-div form px-3   md:min-w-70  w-40 md:w-70   pt-3 rounded-lg shadow-md  pb-4">
          <section>
            {' '}
            <img
              src={image11}
              className="md:h-48 h-32   rounded-lg w-40   md:w-70 "
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
          <button className="w-full py-2 mt-3 rounded-md form btn text-base font-medium  text-white">
            Buy
          </button>
        </div>
        <div className="color-div form px-3  md:min-w-70   w-40 md:w-70   pt-3 rounded-lg shadow-md  pb-4">
          <section>
            {' '}
            <img
              src={image12}
              className="md:h-48 h-32  rounded-lg w-40   md:w-70 "
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
          <button className="w-full py-2 mt-3 rounded-md form btn text-base font-medium  text-white">
            Buy
          </button>
        </div>
      </section>
    </section>
  );
}

export default Collection;
