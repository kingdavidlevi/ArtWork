import { useState } from 'react';
import Eth from './Images/download (2).png';

function Wallet() {
  const [wallet, setWallet] = useState(
    'UQD05PEF2iwRFrB8QdzEXIUFd0zuafjLZr-GRD14yCM-1whG',
  );
  return (
    <section className="top-24  dropdown left-28  h-80 fixed w-83">
      <section className="h-18  ul">
        <div className="  gap-2 place-items-center justify-center flex font-medium text-lg   ">
          <h1 className="text-white">Account </h1>
          <img src={Eth} className="h-4 w-4 rounded-full" />
        </div>
        <div className="w-28 grid place-items-center mt-3 overflow-hidden">
          {' '}
          <p className="text-white text-sm text-nowrap">{wallet}</p>{' '}
        </div>
      </section>
    </section>
  );
}
export default Wallet;
