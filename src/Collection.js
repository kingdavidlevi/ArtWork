import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import pic from '../src/Images/images (9).jpeg';

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
      <div className="mt-10 flex gap-2  ">
        <h1 className="text-white md:pl-8 pl-3 lg:text-xl md:text-lg font-bold">
          Latest Collection
        </h1>
        <FaArrowRight className="text-white mt-1.5 md:mt-2" />
      </div>

      <section className="flex mt-8 pl-8 pb-20 gap-3">
        {data.map((item) => (
          <div key={item.id} className="btn  w-70 gap-10 rounded-xl">
            <img className="w-70 rounded-t-xl h-52" src={pic} />

            <p className="text-white mb-5 pl-3 text-lg font-semibold mt-4">
              {item.name}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Collection;
