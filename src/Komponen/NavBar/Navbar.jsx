import React from 'react';
import Logo from "../../assets/1.SekepingKoin.png";

const Navbar = ({ setMode }) => {
  return (
    <nav className="bg-white py-4 px-6 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-48 h-auto" />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-4">
        <button
          onClick={() => setMode("CoinToFiat")}
          className="text-gray-700 font-medium hover:text-blue-500 transition"
        >
          Coin to Fiat
        </button>
        <button
          onClick={() => setMode("FiatToCoin")}
          className="text-gray-700 font-medium hover:text-blue-500 transition"
        >
          Fiat to Coin
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
