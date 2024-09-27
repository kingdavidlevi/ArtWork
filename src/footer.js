import { FaRegCopyright } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function Footer() {
  const navigate = useNavigate();
  const terms = () => {
    navigate('/Terms');
  };
  const Privacy = () => {
    navigate('/PrivacyPolicy');
  };
  return (
    <section className=" grid place-items-center mt-40 w-full">
      <section className="border-t-r  w-90% border-t-gray-200 pt-6 md:flex  grid place-items-center md:items-start md:justify-between">
        <div>
          <p className="text-white gap-2 flex text-sm">
            <FaRegCopyright className="text-sm mt-0.5" /> 2019 - 2024 Artify Nft
            Networks, Inc
          </p>
        </div>
        <div className="flex mt-3 lg:mt-0 gap-4">
          <p
            className="text-white hover:underline cursor-pointer text-sm"
            onClick={Privacy}
          >
            Privacy Policy{' '}
          </p>
          <p
            className="text-white hover:underline cursor-pointer text-sm"
            onClick={terms}
          >
            Terms of Services
          </p>
        </div>
      </section>
    </section>
  );
}

export default Footer;
