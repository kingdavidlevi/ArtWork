import { Outlet, useLocation, useOutletContext } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './footer';
import MainHeader from './MainHeader';
function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);
  const { user } = useOutletContext();

  const [explorer, setExplorer] = useState(false);
  return (
    <section>
      <MainHeader
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        walletOpen={walletOpen}
        setWalletOpen={setWalletOpen}
        explorer={explorer}
        setExplorer={setExplorer}
      />

      <div
        className={` ${
          isOpen || walletOpen
            ? 'bg-black md:px-8 md:pt-32 pt-28 overflow-hidden fixed h-full w-full pb-20 '
            : 'bg-black md:px-8 md:pt-32 pt-28 pb-20 w-full'
        }`}
      >
        <Outlet
          context={{
            isOpen,
            setIsOpen,
            user,
            explorer,
            setExplorer,
            walletOpen,
            setWalletOpen,
          }}
        />
        <Footer />
      </div>
    </section>
  );
}

export default Main;
