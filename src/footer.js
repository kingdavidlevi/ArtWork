import { FaRegCopyright } from 'react-icons/fa';
function Footer() {
  return (
    <section className=" grid place-items-center w-full">
      <section className="border-t-r  w-90% border-t-gray-200 pt-6 md:flex  grid place-items-center md:items-start md:justify-between">
        <div>
          <p className="text-white gap-2 flex text-sm">
            <FaRegCopyright className="text-sm mt-0.5" /> 2019 - 2024 Artify Nft
            Networks, Inc
          </p>
        </div>
        <div className="flex mt-3 lg:mt-0 gap-4">
          <p className="text-white hover:underline cursor-pointer text-sm">
            Privacy Policy{' '}
          </p>
          <p className="text-white hover:underline cursor-pointer text-sm">
            Terms of Services
          </p>
        </div>
      </section>
    </section>
  );
}

export default Footer;
