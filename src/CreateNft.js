import ImageSlider from './ImageSlider';
import { FaImage } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
function CreateNft() {
  const navigate = useNavigate();
  const images = [
    require('./Images/pexels-steve-1572386.jpg'),
    require('./Images/pexels-heftiba-1194420.jpg'),
    require('./Images/pexels-mccutcheon-1209843.jpg'),
  ];
  const home = () => {
    navigate('/');
  };
  const create = () => {
    navigate('/AdminCreateCollection');
  };
  return (
    <section className=" bg-black w-full lg:flex  h-screen relative ">
      <div
        className="absolute top-4 left-6 cursor-pointer h-8 w-8 rounded-full grid  dropdown-li place-items-center z-20"
        onClick={home}
      >
        <FaArrowLeft className="text-white text-base md:text-lg  " />
      </div>
      <div className="w-full lg:h-full lg:hidden ">
        {' '}
        <ImageSlider images={images} />
      </div>
      <section className="grid lg:ml-10 place-items-center  lg:place-items-start lg:place-content-center   w-full   ">
        <div className="  lg:block  hidden cursor-pointer" onClick={create}>
          <p className="text-white md:text-4xl text-3xl font-semibold">
            Create
          </p>
        </div>
        <div
          className="btn mt-14 grid md:w-80% place-items-center myDiv cursor-pointer pr-5 pl-4 py-6 z-40 rounded-md w-90%"
          onClick={create}
        >
          <div className="flex w-90%  gap-3">
            <FaImage className="text-white text-xl" />
            <p className="text-white font-bold text-base">Collection or item</p>
          </div>
          <section className="w-90% flex justify-between mt-6">
            <div className="w-80%">
              <p className="text-white  font-medium text-base">
                Create a new NFT collection or add an NFT to an existing one.
                Your items will be displayed immediately. List for sale when
                you're ready.
              </p>
            </div>
            <FaArrowRight className="text-white text-xl" />
          </section>
        </div>
      </section>
      <div className="w-full lg:h-full hidden lg:block ">
        {' '}
        <ImageSlider images={images} />
      </div>
    </section>
  );
}

export default CreateNft;
