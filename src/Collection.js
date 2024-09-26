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
    <section>
      <div className="md:mt-16 mt-10  flex gap-2  ">
        <h1 className="text-white  lg:text-2xl md:text-lg font-bold">
          Latest Collection
        </h1>
        <FaArrowRight className="text-white mt-1.5 md:mt-2" />
      </div>

      <section className="md:flex justify-between mt-8  pb-20 gap-3">
        <div>
          <section>
            {' '}
            <img src={image1} className="h-48  w-80" />
          </section>
        </div>
        <div className="form rounded-md  pb-4">
          <section>
            {' '}
            <img src={image2} className="h-48  w-80" />{' '}
          </section>
          <div className="ml-3">
            <p className="mt-4 text-white">Adams Christopher</p>
            <section className="w-full flex justify-between mt-6">
              <p className="text-white">Amount :</p>
              <p>
                <span>0.08</span>ETH
              </p>
            </section>
          </div>
        </div>
        <div>
          <section>
            {' '}
            <img src={image3} className="h-48  w-80" />{' '}
          </section>
        </div>

        <div>
          <section>
            {' '}
            <img src={image5} className="h-48  w-80" />{' '}
          </section>
        </div>
      </section>
    </section>
  );
}

export default Collection;
